export interface Podcast {
  collectionName: string
  artistName: string
  artworkUrl100: string
}

export interface PodcastEpisode {
  id: string
  title: string
  img: string[]
  author: string
  summary: string
}
