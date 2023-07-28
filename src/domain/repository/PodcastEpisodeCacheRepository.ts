import { PodcastEpisode } from "../models"

export default interface PodcastEpisodeCacheRepository {
  getPodcastEpisodeCache(): PodcastEpisode[] | undefined
  setPodcastEpisodeCache(podcastEpisodes: PodcastEpisode[]): void
}
