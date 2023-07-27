import PodcastRepository from "@/domain/repository/PodcastRepository"
import { PodcastEpisode } from "@/domain/models"

export class GetAllPodcastsUseCase {
  constructor(private podcasteRepository: PodcastRepository) {}

  execute(): Promise<PodcastEpisode[]> {
    return this.podcasteRepository.getAllPodcasts()
  }
}
