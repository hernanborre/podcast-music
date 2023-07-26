import { useState, useEffect, useContext } from "react"
import { LoadingContext } from "../../../context/LoadingContext"

import { PodcastEpisodeDetailStyled, EpisodeColumnStyled } from "./PodcastEpisodeDetail.styles"

import { PodcastEpisodeDetailCard } from "./PodcastEpisodeDetailCard/PodcastEpisodeDetailCard"
import { PodcastDetailCard } from "../common/PodcastDetailCard"

import { useParams } from "react-router-dom"
import { useGetAllPodcasts } from "../../../hooks/useGetAllPodcasts"
import { useGetTracksByPodcastId } from "../../../hooks/useGetTracksByPodcastId"
import { PodcastDetailDTO } from "@/infraestructure/repository/dtos/PodcastDetail/PodcastDetailDTO"
import Episode from "@/infraestructure/repository/dtos/Episode/EpisodeDTO"
import { PodcastDetailResponseDTO } from "@/infraestructure/repository/dtos/PodcastDetail/PodcastDetailResponseDTO"
import { PodcastEpisode } from "@/domain/models"

import GetAllPodcastsUseCase from "../../../../../application/usecases/GetAllPodcastsUseCase"
import  FetchPodcastRepository from "../../../../repository/adapter/FetchPodcastsRepository"

export const PodcastEpisodeDetail = () => {
  const [currentTrack, setCurrentTrack] = useState<PodcastDetailDTO | undefined | null>(null)
  const { podcastId, episodeId: trackId } = useParams()
  
  const getAllPodcastsUseCase = new GetAllPodcastsUseCase(new FetchPodcastRepository())
  const [data, setData] = useState<PodcastEpisode[] | null>([])

  //let isLoading = true
  //const { data } = useGetAllPodcasts()
  const { data: tracksData, isLoading }: { data: PodcastDetailResponseDTO | undefined; isLoading: boolean } = useGetTracksByPodcastId()
  const { setIsContextLoading } = useContext(LoadingContext)

  // get the podcast id of the uri router path param
  const podcast = data?.find((podcast: PodcastEpisode) => podcast.id === podcastId)

  // manage loading header navbar with useContext custom hook
  useEffect(() => {
    const getAllPodcastsData = async () => {
      setIsContextLoading(true)
      const allPodcasts = await getAllPodcastsUseCase.execute()
      setData(allPodcasts)
      setIsContextLoading(false)
    }
    getAllPodcastsData()

    if(!data) {
      //isLoading=true
      setIsContextLoading(true)
    }
  }, [isLoading, setIsContextLoading])

  useEffect(() => {
    if (tracksData) {
      const track = tracksData.results.find((track: PodcastDetailDTO) => track.trackId === Number(trackId))
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
