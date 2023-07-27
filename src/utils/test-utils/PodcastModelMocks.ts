import { PodcastDetail, PodcastEpisode } from "@/domain/models";

export const tracksDataMock: PodcastDetail[] = [
  {
    trackId: "13131313",
    trackTimeMillis: 22091950,
    trackName: "Test Track 1",
    episodeUrl: "https://lalala.test.com/episode=3",
    trackCount: 2,
    releaseDate: "1986-03-13T07:03:84Z",
    description: "A brief description of this podcast lorem ipsum test",
    shortDescription: "Shorty descriptions 1",
    collectionId: 324234, 
  },
  {
    trackCount: 3,
    episodeUrl: "https://lalala.test.com/episode=3",
    trackId: "191919",
    trackTimeMillis: 24121950,
    trackName: "Test Track 2",
    releaseDate: "2021-09-22T09:00:00Z",
    description: "A brief description of this podcast lorem ipsum test 2",
    shortDescription: "Shorty descriptions 3",
    collectionId: 23232
  }
]

export const podcastEpisodeMock: PodcastEpisode = {
  id: "131313",
  title: "Name of the podcast test!",
  img: [
    "https://i8n-ssl.staticdn.com/image/thumb/Podcasts678/v4/9a/1f/5e/ad26e449-1c37-4368-b8ee-6b805cd4e1c5/liza_130000000000000000.jpg/400x4000bb.png",
    "https://i8n-ssl.staticdn.com/image/thumb/Podcasts678/v4/9a/1f/5e/ad26e449-1c37-4368-b8ee-6b805cd4e1c5/liza_130000000000000000.jpg/400x400bb.png",
    "https://i8n-ssl.staticdn.com/image/thumb/Podcasts678/v4/9a/1f/5e/ad26e449-1c37-4368-b8ee-6b805cd4e1c5/liza_130000000000000000.jpg/400x400bb.png"
  ],
  author: "An artist test label",
  summary:
    "This a complete mocked summary, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas congue sapien vel bibendum. \
            Suspendisse potenti. Sed id porta est. Praesent risus tellus, hendrerit et vestibulum sed, eleifend sed odio. Nullam mollis turpis."
}