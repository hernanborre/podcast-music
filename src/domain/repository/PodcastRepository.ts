import { PodcastDetail, PodcastEpisode } from "../models"

export default interface PodcastRepository {
  getAllPodcasts(): Promise<PodcastEpisode[]>
  getPodcastDetail(podcastId: string): Promise<PodcastDetail[]>
}
