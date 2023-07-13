import { Routes, Route } from "react-router-dom"
import { PodcastsPage } from "./Podcasts/PodcastsPage"
import { PodcastPage } from "./Podcast/PodcastPage"
import { PodcastEpisodePage } from "./PodcastEpisode/PodcastEpisodePage"

export const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<PodcastsPage />} />
      <Route path="/podcast/:podcastId" element={<PodcastPage />} />
      <Route path="/podcast/:podcastId/episode/:episodeId" element={<PodcastEpisodePage />} />
    </Routes>
  )
}
