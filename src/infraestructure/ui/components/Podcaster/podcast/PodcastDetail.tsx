import { useEffect, useContext, useState } from "react"
import { useParams } from "react-router-dom"

import { PodcastListSkeleton } from "./PodcastListSkeleton/PodcastListSkeleton"
import { PodcastDetailHeader } from "./PodcastDetailHeader"
import { PodcastDetailCard } from "../common/PodcastDetailCard"
import { PodcastDetailEpisodesList } from "./PodcastDetailEpisodesList"

import { PodcastDetailStyled, PodcastColumStyled } from "./PodcastDetail.styles"

import { LoadingContext } from "../../../context/LoadingContext"

import { PodcastDetail, PodcastEpisode } from "@/domain/models"

import { GetAllPodcastsUseCase, GetTracksByPodcastIDUseCase, FindPodcastEpisodeByID } from "../../../../../application/usecases"
import FetchPodcastRepository from "../../../../repository/adapter/FetchPodcastsRepository"

export const PodcastDetailComponent = () => {
  const { podcastId }: { podcastId?: string } = useParams()
  const getAllPodcastsUseCase = new GetAllPodcastsUseCase(new FetchPodcastRepository())
  const getTracksByPodcastIDUseCase = new GetTracksByPodcastIDUseCase(new FetchPodcastRepository())
  const [data, setData] = useState<PodcastEpisode[] | null>(null)
  const [tracksData, setTracksData] = useState<PodcastDetail[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const { setIsContextLoading } = useContext(LoadingContext)
  const findPodcastEpisodeByID = new FindPodcastEpisodeByID()

  //filter the data to get the podcast with the same id as the one in the router params
  const podcast = findPodcastEpisodeByID.execute(data, podcastId)
  useEffect(() => {
    const getAllPodcastsData = async () => {
      setIsContextLoading(true)
      setIsLoading(true)
      const allPodcasts = await getAllPodcastsUseCase.execute()
      setData(allPodcasts)
      const allTracks = await getTracksByPodcastIDUseCase.execute(podcastId)
      setTracksData(allTracks)
      setIsLoading(false)
      setIsContextLoading(false)
    }

    getAllPodcastsData()

    const getTracksData = async () => {
      const allTracks = await getTracksByPodcastIDUseCase.execute(podcastId)
      setTracksData(allTracks)
      setIsContextLoading(false)
    }
  }, [setIsContextLoading])

  return (
    <PodcastDetailStyled>
      <PodcastDetailCard podcast={podcast} podcastId={podcastId} />
      <PodcastColumStyled>
        {isLoading ? (
          <PodcastListSkeleton />
        ) : (
          <>
            <PodcastDetailHeader tracksData={tracksData} />
            <PodcastDetailEpisodesList tracksData={tracksData} />
          </>
        )}
      </PodcastColumStyled>
    </PodcastDetailStyled>
  )
}
