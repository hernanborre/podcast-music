export interface Podcast {
  collectionName: string
  artworkUrl100: string
  artistName: string
}

// export interface PodcastFromFeed {
//   id: { attributes: Record<string, string> } // id
//   "im:name": { label: string } // title?
//   "im:artist": { label: string } // artist
 //   "im:image": { label: string }[] // img?
//   summary: { label: string } // summary
// }

export interface PodcastEpisode {
  id: string
  title: string
  img: string[]
  author: string
  summary: string
}
