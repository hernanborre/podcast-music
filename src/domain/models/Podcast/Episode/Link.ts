import { Type, Rel } from "./Headers"

export interface Link {
  attributes: LinkAttributes
}

interface LinkAttributes {
  href: string
  type?: Type
  rel: Rel
}
