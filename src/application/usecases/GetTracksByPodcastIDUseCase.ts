import { PodcastDetail } from "@/domain/models";
import PodcastRepository from "@/domain/repository/PodcastRepository";
//import EpisodeDTO from "../../infraestructure/repository/dtos/Episode/EpisodeDTO";
//import PodcastDetailResponseDTO from "../../infraestructure/repository/dtos/PodcastDetail/PodcastDetailResponseDTO";

export class FilteredPodcastsUseCase {
  // inyectar el repository

  // justo este useCase no necesita inyectar el repo porque hace
  // su servicio en memory
  constructor(private podcasteRepository: PodcastRepository) {
      // aquí se implementa la interfaz para que nuestro model services / use cases 
  }

  execute(podcastId: string ): Promise<PodcastDetail> {
    return this.podcasteRepository.getPodcastDetail(podcastId)
  }
}