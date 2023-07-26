import EpisodeDTO from "../../infraestructure/repository/dtos/Episode/EpisodeDTO";
//import PodcastRepository from "@/domain/repository/PodcastRepository";

export class FilteredPodcastsUseCase {
  // se podría inyectar el repository en el constructor
  execute(podcasts?: EpisodeDTO[] , filter?: string): EpisodeDTO[] | undefined {
    return podcasts?.filter((podcast:  EpisodeDTO) => podcast["im:name"].label.toLowerCase().includes(filter??""));
  }
}