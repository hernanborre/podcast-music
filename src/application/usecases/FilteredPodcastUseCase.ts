import { PodcastEpisode } from "@/domain/models";

export class FilteredPodcastsUseCase {
  execute(podcasts?: PodcastEpisode[] , filter?: string): PodcastEpisode[] | undefined {
    return podcasts?.filter((podcast:  PodcastEpisode) => podcast.title.toLowerCase().includes(filter?.toLowerCase()??""))
  }
}