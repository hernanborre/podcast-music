import { PodcastDetail, PodcastEpisode } from "../../../domain/models"
import { PodcastRepository } from "../../../domain/repository"
import EpisodeDTO from "../dtos/Episode/EpisodeDTO"
import { PodcastDetailDTO } from "../dtos/PodcastDetail/PodcastDetailDTO"
import { PodcastDetailResponseDTO } from "../dtos/PodcastDetail/PodcastDetailResponseDTO"

export default class FetchPodcastRepository implements PodcastRepository {
  async getAllPodcasts(): Promise<PodcastEpisode[]> {
    const URI_LIST_ALL_EPISODES = "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    const response = await fetch(URI_LIST_ALL_EPISODES)
    if (!response.ok) {
      console.error(response)
      throw new Error("Failed to fetch podcasts")
    }
    const responseData = await response.json()

    const topEpisodes: EpisodeDTO[] = responseData?.feed?.entry as EpisodeDTO[]
    const data: PodcastEpisode[] = this.podcastEpisodeDTOMapper(topEpisodes)
    return data

    // const { isLoading, data, error } = useQuery(["podcasts"], fetchPodcastList, {
    //     cacheTime: 1000 * 60 * 60 * 24
    //   })
    //   return { isLoading, data, error }
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
    const URL = "https://itunes.apple.com/lookup?id="
    const queryParams = "&media=podcast&entity=podcastEpisode"
    const proxiedUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(`${URL}${podcastId}${queryParams}`)}`

    const response = await fetch(proxiedUrl)

    if (!response.ok) {
      console.error(response)
      throw new Error("Failed to fetch tracks for podcastId: " + podcastId)
    }
    const data = await response.json()
    this.podcastDetailDTOMapper(data as PodcastDetailResponseDTO)

    return this.podcastDetailDTOMapper(data as PodcastDetailResponseDTO)
    // const { isLoading, data, error } = useQuery(["tracks", podcastId], fetchTracks, {
    //     cacheTime: 1000 * 60 * 60 * 24
    //   })
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
}
