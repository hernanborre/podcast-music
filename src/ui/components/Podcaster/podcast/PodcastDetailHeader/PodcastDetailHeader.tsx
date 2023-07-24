import { PodcastDetailResponse } from "@/domain/models/Podcast/PodcastDetail/PodcastDetailResponse"
import { PodcastDetailHeaderStyled } from "./PodcastDetailHeader.styles"

//export const PodcastDetailHeader = ({tracksData} : {tracksData: PodcastDetailResponse}) => {
export const PodcastDetailHeader = ({ tracksData }: { tracksData: PodcastDetailResponse | undefined }) => {
  return (
    <PodcastDetailHeaderStyled>
      <h2>Episodes: {tracksData?.results[0]?.trackCount}</h2>
    </PodcastDetailHeaderStyled>
  )
}
