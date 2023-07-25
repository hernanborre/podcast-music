import Episode from "../../infraestructure/repository/dtos/Episode/EpisodeDTO";
//import PodcastRepository from "@/domain/repository/PodcastRepository";

export class FilteredPodcastsUseCase {
  // se podría inyectar el repository en el constructor
  execute(podcasts: Episode[], filter: string): Episode[] {
    return podcasts.filter((podcast) => podcast.title.label.includes(filter));
  }
}