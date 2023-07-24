import { useEffect, useContext } from "react"
import { useParams } from "react-router-dom"

import { PodcastListSkeleton } from "./PodcastListSkeleton/PodcastListSkeleton"
import { PodcastDetailHeader } from "./PodcastDetailHeader"
import { PodcastDetailCard } from "../common/PodcastDetailCard"
import { PodcastDetailEpisodesList } from "./PodcastDetailEpisodesList"

import { LoadingContext } from "../../../context/LoadingContext"
import { useGetAllPodcasts } from "../../../hooks/useGetAllPodcasts"
import { useGetTracksByPodcastId } from "../../../hooks/useGetTracksByPodcastId"

import { PodcastDetailStyled, PodcastColumStyled } from "./PodcastDetail.styles"

export const PodcastDetail = () => {
  const { podcastId } = useParams()
  const { data } = useGetAllPodcasts()
  const { data: tracksData, isLoading } = useGetTracksByPodcastId()
  const { setIsContextLoading } = useContext(LoadingContext)

  //filter the data to get the podcast with the same id as the one in the router params
  const podcast = data?.feed?.entry?.find((podcast: any) => podcast.id.attributes["im:id"] === podcastId)
  useEffect(() => {
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
