import { PodcastDetail } from "../models"

export default interface PodcastDetailCacheRepository {
  getPodcastDetailCache(podcastId: string): PodcastDetail[] | undefined
  setPodcastDetailCache(podcastDetail: PodcastDetail[], podcastId: string):void
}
