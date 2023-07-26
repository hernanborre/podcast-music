//Styled components
import { PodcastEpisode } from "@/domain/models"
import { PodcastListItemStyled } from "./PodcastListItem.styles"

export const PodcastListItem = ({ podcast } : {podcast: PodcastEpisode}) => {
  return (
    <PodcastListItemStyled title={podcast.title.toUpperCase()}>
      <img src={podcast.img[2]} alt={podcast.title} />
      <div>
        <h3>{podcast.title.toUpperCase()}</h3>
        <h4>Author: {podcast.author}</h4>
      </div>
    </PodcastListItemStyled>
  )
}
