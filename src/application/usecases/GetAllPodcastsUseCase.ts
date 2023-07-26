//import { PodcastEpisode } from "@/domain/models";
//import { PodcastEpisode } from "@/domain/models";
import PodcastRepository from "@/domain/repository/PodcastRepository";
import EpisodeDTO from "../../infraestructure/repository/dtos/Episode/EpisodeDTO";
import { PodcastEpisode } from "@/domain/models";

export class GetAllPodcastsUseCase {
  
  // inyectar el repository
  constructor(private podcasteRepository: PodcastRepository) {
      // aquí se implementa la interfaz para que nuestro model  services / use cases 
  }

  execute( ): Promise<PodcastEpisode[]> {
    return this.podcasteRepository.getAllPodcasts()
  }
}