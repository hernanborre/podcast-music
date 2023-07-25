import Episode from "./Episode"
import { Author } from "./Author"
import { Link } from "./Link"
import { Icon } from "./Icon"

export interface Feed {
  author: Author
  id: Icon
  entry: Episode[]
  title: Icon
  updated: Icon
  rights: Icon
  icon: Icon
  link: Link[]
}
