import { PodcastDetailResponseDTO } from "@/infraestructure/repository/dtos/PodcastDetail/PodcastDetailResponseDTO"
import { PodcastDetailHeaderStyled } from "./PodcastDetailHeader.styles"

//export const PodcastDetailHeader = ({tracksData} : {tracksData: PodcastDetailResponse}) => {
export const PodcastDetailHeader = ({ tracksData }: { tracksData: PodcastDetailResponseDTO | undefined }) => {
  return (
    <PodcastDetailHeaderStyled>
      <h2>Episodes: {tracksData?.results[0]?.trackCount}</h2>
    </PodcastDetailHeaderStyled>
  )
}
