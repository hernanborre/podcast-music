import { PodcastDetail } from "@/domain/models"
import PodcastRepository from "@/domain/repository/PodcastRepository"
//import EpisodeDTO from "../../infraestructure/repository/dtos/Episode/EpisodeDTO";
//import PodcastDetailResponseDTO from "../../infraestructure/repository/dtos/PodcastDetail/PodcastDetailResponseDTO";

export class GetTracksByPodcastIDUseCase {

  constructor(private podcasteRepository: PodcastRepository) {}

  execute(podcastId?: string): Promise<PodcastDetail[]> {
    return this.podcasteRepository.getPodcastDetail(podcastId ?? "")
  }
}
