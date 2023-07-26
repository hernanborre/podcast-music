import { PodcastDetail, Podcast, PodcastEpisode } from "../models"

export default interface PodcastRepository {
  // signatures of the methods to call the ApiFetchRepository
  // fn que llama a los getPodcasts
  // fn contract que llama al detalle getPodcastDetail
  getAllPodcasts(): Promise<PodcastEpisode[]>
  getPodcastDetail(podcastId: string): Promise<PodcastDetail[]>
}
