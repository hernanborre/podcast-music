import EpisodeDTO from "./EpisodeDTO"
import { AuthorDTO } from "./AuthorDTO"
import { LinkDTO } from "./LinkDTO"
import { IconDTO } from "./IconDTO"

export interface FeedDTO {
  author: AuthorDTO
  id: IconDTO
  entry: EpisodeDTO[]
  title: IconDTO
  updated: IconDTO
  rights: IconDTO
  icon: IconDTO
  link: LinkDTO[]
}
