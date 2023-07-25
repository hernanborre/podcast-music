export interface PodcastDetailDTO {
  wrapperType?: string
  collectionName?: string
  feedUrl?: string
  artistViewUrl?: string
  trackViewUrl?: string
  closedCaptioning?: string
  episodeUrl?: string
  collectionId?: number
  trackId: number
  artistIds?: Array<number>
  trackTimeMillis: number
  genres?: Array<genresItemType>
  previewUrl?: string
  contentAdvisoryRating?: string
  artworkUrl60?: string
  description: string
  trackCount: number
  trackName: string
  shortDescription?: string
  episodeGuid?: string
  releaseDate: string
  country?: string
  kind?: string
  episodeFileExtension?: string
  episodeContentType?: string
  artworkUrl600?: string
  artworkUrl160?: string
  collectionViewUrl?: string
}

interface genresItemType {
  name: string
  id: string
}
