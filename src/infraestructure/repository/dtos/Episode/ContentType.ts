export interface ContentType {
  attributes: ContentTypeAttributes
}

interface ContentTypeAttributes {
  label: FluffyLabel
  term: FluffyLabel
}

enum FluffyLabel {
  Podcast = "Podcast"
}
