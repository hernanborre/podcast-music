import { PodcastEpisode } from "@/domain/models";
import PodcastRepository from "@/domain/repository/PodcastRepository";

export class GetAllPodcastsUseCase {
  
  // inyectar el repository
  constructor(private podcasteRepository: PodcastRepository) {
      // aquí se implementa la interfaz para que nuestro model  services / use cases 
  }

  execute( ): Promise<PodcastEpisode[]> {
    return this.podcasteRepository.getAllPodcasts()
  }
}