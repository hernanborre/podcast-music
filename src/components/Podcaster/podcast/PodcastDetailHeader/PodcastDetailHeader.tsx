import {PodcastDetailHeaderStyled} from './PodcastDetailHeader.styles';

export const PodcastDetailHeader = ({tracksData}: any) => {
  return (
    <PodcastDetailHeaderStyled>
      <h2>Episodes: {tracksData?.results[0]?.trackCount}</h2>
    </PodcastDetailHeaderStyled>
  );
};