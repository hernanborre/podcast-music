import { Category } from "./Category"
import { Artist } from "./Artist"
import { ReleaseDate } from "./ReleaseDate"
import { ContentType } from "./ContentType"
import { Image } from "./Image"
import { Price } from "./Price"
import { Icon } from "./Icon"
import { Link } from "./Link"

export default interface Episode {
  id: ID
  title: Icon
  "im:name": Icon
  "im:artist": Artist
  "im:image": Image[]
  "im:price": Price
  "im:contentType": ContentType
  "im:releaseDate": ReleaseDate
  category: Category
  link: Link
  summary: Icon
  rights?: Icon
}

interface ID {
  label: string
  attributes: IDAttributes
}

interface IDAttributes {
  "im:id": string
}
