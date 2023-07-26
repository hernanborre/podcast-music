
export interface PodcastEpisode {
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

 interface CategoryDTO {
  attributes: CategoryAttributesDTO
}

 enum Rel {
  Alternate = "alternate",
  Self = "self"
}

 enum Type {
  TextHTML = "text/html"
}
interface CategoryAttributesDTO {
  "im:id": string
  scheme: string
  term: PurpleLabelDTO
  label: PurpleLabelDTO
}

enum PurpleLabelDTO {
  Music = "Music",
  MusicInterviews = "Music Interviews",
  MusicHistory = "Music History",
  MusicCommentary = "Music Commentary"
}

interface IMArtistAttributesDTO {
  href: string
}
 interface ArtistDTO {
  attributes?: IMArtistAttributesDTO
  label: string
}

 interface ReleaseDateDTO {
  label: Date
  attributes: IconDTO
}

 interface ImageDTO {
  attributes: ImageAttributesDTO
  label: string
}

interface ImageAttributesDTO {
  height: string
}

interface ID {
  label: string
  attributes: IDAttributesDTO
}

enum Currency {
  Usd = "USD"
}

enum PriceLabel {
  Get = "Get"
}

export interface PriceDTO {
  attributes: PriceAttributesDTO
  label: PriceLabel
}

interface PriceAttributesDTO {
  amount: string
  currency: Currency
}

interface IDAttributesDTO {
  "im:id": string
}

 interface IconDTO {
  label: string
}

 interface ContentTypeDTO {
  attributes: ContentTypeAttributesDTO
}

interface ContentTypeAttributesDTO {
  label: FluffyLabelDTO
  term: FluffyLabelDTO
}

enum FluffyLabelDTO {
  Podcast = "Podcast"
}

 interface LinkDTO {
  attributes: LinkAttributesDTO
}

interface LinkAttributesDTO {
  href: string
  type?: Type
  rel: Rel
}
