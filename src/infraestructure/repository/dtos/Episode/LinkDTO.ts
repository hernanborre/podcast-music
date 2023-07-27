import { Type, Rel } from "./HeadersDTO"

export interface LinkDTO {
  attributes: LinkAttributesDTO
}

interface LinkAttributesDTO {
  href: string
  type?: Type
  rel: Rel
}
