import { PodcastDetail } from "@/domain/models"
import PodcastRepository from "@/domain/repository/PodcastRepository"

export class GetTracksByPodcastIDUseCase {

  constructor(private podcasteRepository: PodcastRepository) {}

  execute(podcastId?: string): Promise<PodcastDetail[]> {
    return this.podcasteRepository.getPodcastDetail(podcastId ?? "")
  }
}
