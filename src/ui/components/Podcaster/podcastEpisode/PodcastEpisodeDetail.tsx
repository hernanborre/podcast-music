import { useState, useEffect, useContext } from "react"
import { LoadingContext } from "../../../../context/LoadingContext"

import { PodcastEpisodeDetailStyled, EpisodeColumnStyled } from "./PodcastEpisodeDetail.styles"

import { PodcastEpisodeDetailCard } from "./PodcastEpisodeDetailCard/PodcastEpisodeDetailCard"
import { PodcastDetailCard } from "../common/PodcastDetailCard"

import { useParams } from "react-router-dom"
import { useGetAllPodcasts } from "../../../../hooks/useGetAllPodcasts"
import { useGetTracksByPodcastId } from "../../../../hooks/useGetTracksByPodcastId"
import { PodcastDetail } from "@/domain/models/Podcast/PodcastDetail/PodcastDetail"
import Episode from "@/domain/models/Podcast/Episode/Episode"
import { PodcastDetailResponse } from "@/domain/models/Podcast/PodcastDetail/PodcastDetailResponse"

export const PodcastEpisodeDetail = () => {
  const [currentTrack, setCurrentTrack] = useState<PodcastDetail | undefined | null>(null)
  const { podcastId, episodeId: trackId } = useParams()
  const { data } = useGetAllPodcasts()
  const { data: tracksData, isLoading }: { data: PodcastDetailResponse | undefined; isLoading: boolean } = useGetTracksByPodcastId()
  const { setIsContextLoading } = useContext(LoadingContext)

  // get the podcast id of the uri router path param
  const podcast = data?.find((podcast: Episode) => podcast.id.attributes["im:id"] === podcastId)

  // manage loading header navbar with useContext custom hook
  useEffect(() => {
    setIsContextLoading(isLoading)
  }, [isLoading, setIsContextLoading])

  useEffect(() => {
    if (tracksData) {
      const track = tracksData.results.find((track: PodcastDetail) => track.trackId === Number(trackId))
      setCurrentTrack(track)
    }
  }, [tracksData, trackId])

  return (
    <PodcastEpisodeDetailStyled>
      <PodcastDetailCard podcast={podcast} podcastId={podcastId} />
      <EpisodeColumnStyled>
        <PodcastEpisodeDetailCard currentTrack={currentTrack} />
      </EpisodeColumnStyled>
    </PodcastEpisodeDetailStyled>
  )
}
