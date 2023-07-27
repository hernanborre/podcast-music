import { useLocation, Link } from "react-router-dom";

import {Card, CardContent, CardMedia} from "@mui/material";
import { PodcastDetailCardStyled } from "./PodcastDetailCard.styles";
import { PodcastEpisode } from "@/domain/models";

export const PodcastDetailCard = ({ podcast, podcastId } : {podcast?: PodcastEpisode, podcastId?: string}) => {
  // TODO: fix
  //get the location to use it to decide if the card should be a link or not
  const location = useLocation();
  const isEpisode = location.pathname.includes("episode");

  return (
    <PodcastDetailCardStyled>
      <Card sx={{ width: "300px" }}>
        <CardContent sx={{ padding: "16px" }}>
          <Link
            data-testid="podcast-detail-card-link-test-id"
            to={isEpisode ? `/podcast/${podcastId}` : ""}
            style={{ cursor: isEpisode ? "pointer" : "auto" }}
          >
            <CardMedia
              sx={{ borderRadius: 1 }}
              component="img"
              height="240"
              image={podcast?.img[2]}
              alt={podcast?.title}
            />
            <hr />
            <h3>{podcast?.title.toUpperCase()}</h3>
          </Link>
          <h4>by {podcast?.author}</h4>
          <hr />
          <h4>Description:</h4>
          <p>{podcast?.summary}</p>
        </CardContent>
      </Card>
    </PodcastDetailCardStyled>
  );
};
