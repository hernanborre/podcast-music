import PodcastDetailCacheRepository from "@/domain/repository/PodcastDetailCacheRepository"
import { Podcast, PodcastDetail, PodcastEpisode } from "../../../domain/models"
import { PodcastRepository } from "../../../domain/repository"
import EpisodeDTO from "../dtos/Episode/EpisodeDTO"
import { PodcastDetailDTO } from "../dtos/PodcastDetail/PodcastDetailDTO"
import { PodcastDetailResponseDTO } from "../dtos/PodcastDetail/PodcastDetailResponseDTO"
import PodcastEpisodeCacheRepository from "@/domain/repository/PodcastEpisodeCacheRepository"

const URI_LIST_ALL_EPISODES = "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"

const CACHE_KEY_BYPODCAST = "podcastDetailCache_"
const CACHE_KEY_ALLPODCASTS = "podcastsCache"
const CACHE_EXPIRATION_TIME = 1000 * 60 * 60 * 24 // 24 hours in milliseconds

export default class FetchPodcastRepository implements PodcastRepository, PodcastDetailCacheRepository, PodcastEpisodeCacheRepository {
  async getAllPodcasts(): Promise<PodcastEpisode[]> {
    const cachedData = this.getPodcastEpisodeCache()
    if (cachedData) {
      return cachedData
    }

    const response = await fetch(URI_LIST_ALL_EPISODES)
    if (!response.ok) {
      console.error(response)
      throw new Error("Failed to fetch podcasts")
    }
    const responseData = await response.json()

    const topEpisodes: EpisodeDTO[] = responseData?.feed?.entry as EpisodeDTO[]
    const data: PodcastEpisode[] = this.podcastEpisodeDTOMapper(topEpisodes)

    this.setPodcastEpisodeCache(data)

    return data
  }

  podcastEpisodeDTOMapper(topEpisodes: EpisodeDTO[]): PodcastEpisode[] {
    const data: PodcastEpisode[] = topEpisodes.map((item: EpisodeDTO) => {
      const images: string[] = item["im:image"].map((image) => image.label)
      return {
        id: item.id.attributes["im:id"],
        title: item["im:name"].label,
        summary: item.summary.label,
        author: item["im:artist"].label,
        img: images
      }
    })
    return data
  }

  async getPodcastDetail(podcastId: string): Promise<PodcastDetail[]> {
    if (!podcastId) return []

    const cachedData = this.getPodcastDetailCache(podcastId)
    if (cachedData) {
      return cachedData
    }
    const URL = "https://itunes.apple.com/lookup?id="
    const queryParams = "&media=podcast&entity=podcastEpisode"
    const proxiedUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(`${URL}${podcastId}${queryParams}`)}`

    const response = await fetch(proxiedUrl)

    if (!response.ok) {
      console.error(response)
      throw new Error("Failed to fetch tracks for podcastId: " + podcastId)
    }
    const data = await response.json()
    const podcastDetail: PodcastDetail[] = this.podcastDetailDTOMapper(data as PodcastDetailResponseDTO)
    this.setPodcastDetailCache(podcastDetail, podcastId)

    return podcastDetail
  }

  getPodcastDetailCache(podcastId: string): PodcastDetail[] | undefined {
    const cacheKey = CACHE_KEY_BYPODCAST + podcastId
    const cachedData = localStorage.getItem(cacheKey)
    if (cachedData) {
      const { parsedData, timestamp } = JSON.parse(cachedData)
      const currentTime = Date.now()

      if (currentTime - timestamp < CACHE_EXPIRATION_TIME) {
        // Data is still valid, return the cached data
        return parsedData
      }
    }
  }

  setPodcastDetailCache(podcastDetail: PodcastDetail[], podcastId: string) {
    const cacheKey = CACHE_KEY_BYPODCAST + podcastId
    // Update the cache with the new data and timestamp
    const cacheData = {
      parsedData: podcastDetail,
      timestamp: Date.now()
    }
    localStorage.setItem(cacheKey, JSON.stringify(cacheData))
  }

  podcastDetailDTOMapper(tracks: PodcastDetailResponseDTO): PodcastDetail[] {
    const data: PodcastDetail[] = tracks?.results?.map((item: PodcastDetailDTO) => {
      return {
        trackId: item.trackId?.toString(),
        releaseDate: item.releaseDate,
        trackName: item.trackName?.toString(),
        description: item.description,
        trackTimeMillis: item.trackTimeMillis,
        episodeUrl: item.episodeUrl,
        trackCount: item.trackCount,
        collectionId: item.collectionId,
        shortDescription: item.shortDescription?.toString()
      }
    })
    return data
  }

  getPodcastEpisodeCache(): PodcastEpisode[] | undefined {
    const cachedData = localStorage.getItem(CACHE_KEY_ALLPODCASTS)
    if (cachedData) {
      const { parsedData, timestamp } = JSON.parse(cachedData)
      const currentTime = Date.now()

      if (currentTime - timestamp < CACHE_EXPIRATION_TIME) {
        // Data is still valid, return the cached data
        return parsedData
      }
    }
  }

  setPodcastEpisodeCache(podcastEpisodes: PodcastEpisode[]) {
    // Update the cache with the new data and timestamp
    const cacheData = {
      parsedData: podcastEpisodes,
      timestamp: Date.now()
    }
    localStorage.setItem(CACHE_KEY_ALLPODCASTS, JSON.stringify(cacheData))
  }
}
