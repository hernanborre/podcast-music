import Episode from "../../infraestructure/repository/dtos/Episode/Episode";
import PodcastRepository from "@/domain/repository/PodcastRepository";

export class FilteredPodcastsUseCase {
  // inyectar el repository

  // justo este useCase no necesita inyectar el repo porque hace
  // su servicio en memory
  constructor(private podcasteRepository: PodcastRepository) {
      // aquí se implementa la interfaz para que nuestro model  services / use cases 
  }

  execute(podcasts: Episode[], filter: string): Episode[] {
    return podcasts.filter((podcast) => podcast.title.label.includes(filter));
  }
}