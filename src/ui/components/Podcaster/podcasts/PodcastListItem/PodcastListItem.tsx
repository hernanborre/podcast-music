//Styled components
import { PodcastListItemStyled } from "./PodcastListItem.styles"

export const PodcastListItem = ({ podcast } : any) => {
  return (
    <PodcastListItemStyled title={podcast["im:name"].label.toUpperCase()}>
      <img src={podcast["im:image"][2].label} alt={podcast["im:name"].label} />
      <div>
        <h3>{podcast["im:name"].label.toUpperCase()}</h3>
        <h4>Author: {podcast["im:artist"].label}</h4>
      </div>
    </PodcastListItemStyled>
  )
}
