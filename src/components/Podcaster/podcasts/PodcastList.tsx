import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"

import TextField from "@mui/material/TextField"
import Badge from "@mui/material/Badge"

import { useGetAllPodcasts } from "../../../hooks/useGetAllPodcasts"
import { LoadingContext } from "../../../context/LoadingContext"

import { PodcastListItem } from "./PodcastListItem/PodcastListItem"
import { PodcastListStyled, ListStyled, SearchbarStyled, SearchBarInnerStyled } from "./PodcastList.styles"


export const PodcastList = () => {
  const { data, isLoading } = useGetAllPodcasts()
  const { setIsContextLoading } = useContext(LoadingContext)

  const [filteredPodcasts, setFilteredPodcasts] = useState(data?.feed.entry)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    setIsContextLoading(isLoading)
  }, [isLoading, setIsContextLoading])

  useEffect(() => {
    setFilteredPodcasts(data?.feed.entry.filter((podcast: any) => podcast["im:name"].label.toLowerCase().includes(searchTerm.toLowerCase())))
  }, [searchTerm, data?.feed.entry])

  const handleSearch = ({ target } : any) => {
    setSearchTerm(target.value)
  }
//          //InputProps={{ disableUnderline: true }}

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
