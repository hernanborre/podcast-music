import { PodcastDetail } from "@/domain/models"

export class FindTrackByIDUseCase {
  execute(tracksData?: PodcastDetail[], trackId?: string): PodcastDetail | undefined {
    return tracksData?.find((track: PodcastDetail) => track.trackId === trackId)
  }
}
