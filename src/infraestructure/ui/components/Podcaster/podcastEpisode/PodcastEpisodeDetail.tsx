import { useState, useEffect, useContext } from "react"
import { LoadingContext } from "../../../context/LoadingContext"

import { PodcastEpisodeDetailStyled, EpisodeColumnStyled } from "./PodcastEpisodeDetail.styles"

import { PodcastEpisodeDetailCard } from "./PodcastEpisodeDetailCard/PodcastEpisodeDetailCard"
import { PodcastDetailCard } from "../common/PodcastDetailCard"

import { useParams } from "react-router-dom"
import { PodcastDetail, PodcastEpisode } from "@/domain/models"

import { GetAllPodcastsUseCase, GetTracksByPodcastIDUseCase } from "../../../../../application/usecases"
import { FindTrackByIDUseCase, FindPodcastEpisodeByID }  from  "../../../../../application/usecases"

import FetchPodcastRepository from "../../../../repository/adapter/FetchPodcastsRepository"

export const PodcastEpisodeDetail = () => {
  const [currentTrack, setCurrentTrack] = useState<PodcastDetail | undefined | null>(null)
  const { podcastId, episodeId: trackId } = useParams()

  const getAllPodcastsUseCase = new GetAllPodcastsUseCase(new FetchPodcastRepository())
  const [data, setData] = useState<PodcastEpisode[] | null>([])
  const [tracksData, setTracksData] = useState<PodcastDetail[] | null>()

  const getTracksByPodcastIDUseCase = new GetTracksByPodcastIDUseCase(new FetchPodcastRepository())
  const findPodcastEpisodeByID = new FindPodcastEpisodeByID()
  const findTrackByIDUseCase = new FindTrackByIDUseCase()
  const { setIsContextLoading } = useContext(LoadingContext)

  // get the podcast id of the uri router path param
  const podcast = findPodcastEpisodeByID.execute(data, podcastId)

  // manage loading header navbar with useContext custom hook
  useEffect(() => {
    const getAllPodcastsData = async () => {
      setIsContextLoading(true)
      const allPodcasts = await getAllPodcastsUseCase.execute()
      setData(allPodcasts)
    }
    getAllPodcastsData()
  }, [setIsContextLoading])

  useEffect(() => {
    const getTracksData = async () => {
      setIsContextLoading(true)
      const allTracks = await getTracksByPodcastIDUseCase.execute(podcastId)
      setTracksData(allTracks)
      setIsContextLoading(false)
    }
    getTracksData()

    if (tracksData) {
      const track = findTrackByIDUseCase.execute(tracksData, trackId)

      setCurrentTrack(track)
    }
  }, [trackId, data])

  return (
    <PodcastEpisodeDetailStyled>
      <PodcastDetailCard podcast={podcast} podcastId={podcastId} />
      <EpisodeColumnStyled>
        <PodcastEpisodeDetailCard currentTrack={currentTrack} />
      </EpisodeColumnStyled>
    </PodcastEpisodeDetailStyled>
  )
}
