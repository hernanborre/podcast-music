import { PodcastDetailResponseDTO } from "@/infraestructure/repository/dtos/PodcastDetail/PodcastDetailResponseDTO"
import { PodcastDetailHeaderStyled } from "./PodcastDetailHeader.styles"
import { PodcastDetail } from "@/domain/models"

export const PodcastDetailHeader = ({ tracksData }: any) => {

  return (
    <PodcastDetailHeaderStyled>
      <h2>Episodes: {tracksData[0]?.trackCount}</h2>
    </PodcastDetailHeaderStyled>
  )
}
