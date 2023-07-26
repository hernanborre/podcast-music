import { PodcastEpisode } from "@/domain/models";
import EpisodeDTO from "../../infraestructure/repository/dtos/Episode/EpisodeDTO";
//import PodcastRepository from "@/domain/repository/PodcastRepository";

export class FilteredPodcastsUseCase {
  // se podría inyectar el repository en el constructor
  execute(podcasts?: PodcastEpisode[] , filter?: string): PodcastEpisode[] | undefined {
    return podcasts?.filter((podcast:  PodcastEpisode) => podcast.title.toLowerCase().includes(filter??""));
  }
}