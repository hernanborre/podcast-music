import { useLocation, Link } from "react-router-dom";

import {Card, CardContent, CardMedia} from "@mui/material";
import { PodcastDetailCardStyled } from "./PodcastDetailCard.styles";

export const PodcastDetailCard = ({ podcast, podcastId } : any) => {
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
              image={podcast["im:image"][2].label}
              alt={podcast["im:name"].label}
            />
            <hr />
            <h3>{podcast["im:name"].label.toUpperCase()}</h3>
          </Link>
          <h4>by {podcast["im:artist"].label}</h4>
          <hr />
          <h4>Description:</h4>
          <p>{podcast["summary"].label}</p>
        </CardContent>
      </Card>
    </PodcastDetailCardStyled>
  );
};
