import { CategoryDTO } from "./CategoryDTO"
import { ArtistDTO } from "./ArtistDTO"
import { ReleaseDateDTO } from "./ReleaseDateDTO"
import { ImageDTO } from "./ImageDTO"
import { PriceDTO } from "./PriceDTO"
import { IconDTO } from "./IconDTO"
import { LinkDTO } from "./LinkDTO"

export default interface EpisodeDTO {
  id: ID
  title: IconDTO
  "im:name": IconDTO
  "im:artist": ArtistDTO
  "im:image": ImageDTO[]
  "im:price": PriceDTO
  "im:contentType": ContentTypeDTO
  "im:releaseDate": ReleaseDateDTO
  category: CategoryDTO
  link: LinkDTO
  summary: IconDTO
  rights?: IconDTO
}

interface ID {
  label: string
  attributes: IDAttributesDTO
}

interface IDAttributesDTO {
  "im:id": string
}

export interface ContentTypeDTO {
  attributes: ContentTypeAttributesDTO
}

interface ContentTypeAttributesDTO {
  label: FluffyLabelDTO
  term: FluffyLabelDTO
}

enum FluffyLabelDTO {
  Podcast = "Podcast"
}
