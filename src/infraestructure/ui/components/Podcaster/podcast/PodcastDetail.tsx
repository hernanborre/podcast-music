import { useEffect, useContext, useState } from "react"
import { useParams } from "react-router-dom"

import { PodcastListSkeleton } from "./PodcastListSkeleton/PodcastListSkeleton"
import { PodcastDetailHeader } from "./PodcastDetailHeader"
import { PodcastDetailCard } from "../common/PodcastDetailCard"
import { PodcastDetailEpisodesList } from "./PodcastDetailEpisodesList"

import { LoadingContext } from "../../../context/LoadingContext"
import { useGetAllPodcasts } from "../../../hooks/useGetAllPodcasts"
import { useGetTracksByPodcastId } from "../../../hooks/useGetTracksByPodcastId"

import { PodcastDetailStyled, PodcastColumStyled } from "./PodcastDetail.styles"
import EpisodeDTO from "@/infraestructure/repository/dtos/Episode/EpisodeDTO"
import { PodcastDetailResponseDTO } from "@/infraestructure/repository/dtos/PodcastDetail/PodcastDetailResponseDTO"
import { PodcastEpisode } from "@/domain/models"
import GetAllPodcastsUseCase from "../../../../../application/usecases/GetAllPodcastsUseCase"
import FetchPodcastRepository from "../../../../repository/adapter/FetchPodcastsRepository"

export const PodcastDetail = () => {
  const { podcastId }: { podcastId?: string } = useParams()
  //const { data } = useGetAllPodcasts()
  const getAllPodcastsUseCase = new GetAllPodcastsUseCase(new FetchPodcastRepository())
  const [data, setData] = useState<PodcastEpisode[] | null>([])

  const { data: tracksData, isLoading }: { data: PodcastDetailResponseDTO | undefined; isLoading: boolean } = useGetTracksByPodcastId()
  const { setIsContextLoading } = useContext(LoadingContext)

  //filter the data to get the podcast with the same id as the one in the router params
  const podcast = data?.find((podcast: PodcastEpisode) => podcast.id === podcastId)
  useEffect(() => {
    const getAllPodcastsData = async () => {
      setIsContextLoading(true)
      const allPodcasts = await getAllPodcastsUseCase.execute()
      setData(allPodcasts)
      setIsContextLoading(false)
    }
    getAllPodcastsData()

    if (!data) {
      //isLoading=true
      setIsContextLoading(true)
    }

    setIsContextLoading(isLoading)
  }, [isLoading, setIsContextLoading])
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
