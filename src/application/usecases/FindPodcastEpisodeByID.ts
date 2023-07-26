import { PodcastEpisode } from "@/domain/models"

export class FindPodcastEpisodeByID {
  execute(data?: PodcastEpisode[] | null, podcastId?: string): PodcastEpisode | undefined {
    return data?.find((podcast: PodcastEpisode) => podcast.id === podcastId)
  }
}
