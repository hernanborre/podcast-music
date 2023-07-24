import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"

import TextField from "@mui/material/TextField"
import Badge from "@mui/material/Badge"

import { useGetAllPodcasts } from "../../../../hooks/useGetAllPodcasts"
import { LoadingContext } from "../../../../context/LoadingContext"

import { PodcastListItem } from "./PodcastListItem/PodcastListItem"
import { PodcastListStyled, ListStyled, SearchbarStyled, SearchBarInnerStyled } from "./PodcastList.styles"
import Episode from "@/domain/models/Podcast/Episode/Episode"


export const PodcastList = () => {
  const { data , isLoading } = useGetAllPodcasts()
  const { setIsContextLoading } = useContext(LoadingContext)

  const [filteredPodcasts, setFilteredPodcasts] = useState(data)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    setIsContextLoading(isLoading)
  }, [isLoading, setIsContextLoading])

  useEffect(() => {
    setFilteredPodcasts(data?.filter((podcast: Episode) => podcast["im:name"].label.toLowerCase().includes(searchTerm.toLowerCase())))
  }, [searchTerm, data])

  const handleSearch = ({ target } : any) => {
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
          filteredPodcasts?.map((podcast: any) => (
            <Link key={podcast.id.attributes["im:id"]} to={`/podcast/${podcast.id.attributes["im:id"]}`}>
              <PodcastListItem podcast={podcast} />
            </Link>
          ))
        )}
      </ListStyled>
    </PodcastListStyled>
  )
}
