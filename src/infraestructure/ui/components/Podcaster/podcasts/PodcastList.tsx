import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"

import TextField from "@mui/material/TextField"
import Badge from "@mui/material/Badge"

import { useGetAllPodcasts } from "../../../hooks/useGetAllPodcasts"
import { LoadingContext } from "../../../context/LoadingContext"

import { PodcastListItem } from "./PodcastListItem/PodcastListItem"
import { PodcastListStyled, ListStyled, SearchbarStyled, SearchBarInnerStyled } from "./PodcastList.styles"
import EpisodeDTO from "@/infraestructure/repository/dtos/Episode/EpisodeDTO"
import { FilteredPodcastsUseCase } from "../../../../../application/usecases/FilteredPodcastUseCase"
import { GetAllPodcastsUseCase } from "../../../../../application/usecases/GetAllPodcastsUseCase"
import  FetchPodcastRepository from "../../../../repository/adapter/FetchPodcastsRepository"
import { Podcast, PodcastEpisode } from "@/domain/models"

export const PodcastList = () => {
  const getAllPodcastsUseCase = new GetAllPodcastsUseCase(new FetchPodcastRepository())
  //const { data, isLoading }: { data?: EpisodeDTO[]; isLoading: boolean } = useGetAllPodcasts()
  let isLoading = true
  const { setIsContextLoading } = useContext(LoadingContext)
  const [data, setData] = useState<PodcastEpisode[] | null>([])
  const [filteredPodcasts, setFilteredPodcasts] = useState<PodcastEpisode[] | undefined | null>(data)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const getAllPodcastsData = async () => {
      setIsContextLoading(true)
      const allPodcasts = await getAllPodcastsUseCase.execute()
      setData(allPodcasts)
      setFilteredPodcasts(data)
      setIsContextLoading(false)
    }
    getAllPodcastsData()

    if(!data) {
      isLoading=true
      setIsContextLoading(true)
    }
  }, [isLoading, setIsContextLoading])

  useEffect(() => {
    if(data){
      setFilteredPodcasts(new FilteredPodcastsUseCase().execute(data, searchTerm?.toLowerCase())) 
    }
  }, [searchTerm, data])

  const handleSearch = ({ target }: any) => {
    setSearchTerm(target.value)
  }

  return (
    <PodcastListStyled>
      <SearchbarStyled>
        <SearchBarInnerStyled>
          <Badge badgeContent={filteredPodcasts?.length} color="primary" showZero max={999} />
          <TextField variant="outlined" onChange={handleSearch} type="text" placeholder="Filter podcast list..." />
        </SearchBarInnerStyled>
      </SearchbarStyled>
      <ListStyled>
        {filteredPodcasts?.length === 0 ? (
          <h2>No podcasts found...</h2>
        ) : (
          filteredPodcasts?.map((podcast: PodcastEpisode) => (
            //<Link key={podcast.id.attributes["im:id"]} to={`/podcast/${podcast.id.attributes["im:id"]}`}>
            <Link key={podcast.id} to={`/podcast/${podcast.id}`}>
              <PodcastListItem podcast={podcast} />
            </Link>
          ))
        )}
      </ListStyled>
    </PodcastListStyled>
  )
}
