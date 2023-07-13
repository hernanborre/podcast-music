//Material-UI components
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Linkify from "linkify-react"

export const PodcastEpisodeDetailCard = ({ currentTrack }) => {
  const description = currentTrack?.description.replace(/(\.{3}|-{3})|-{2}/g, "")
  return (
    <Card
      sx={{
        padding: "16px",
        minHeight: "320px",
        width: "100%",
        boxShadow: "0 0 7px 0 rgba(106, 87, 87, 0.1)",
      }}
    >
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <h3>{currentTrack?.trackName?.toUpperCase()}</h3>
        {currentTrack?.shortDescription ? (
          <>
            <h4>{currentTrack?.shortDescription}</h4>
            <br />
          </>
        ) : null}
        <Linkify
          as="p"
          options={{
            target: "_blank",
            nl2br: true,
            render: {
              url: ({ attributes, content }) => {
                return (
                  <a {...attributes} style={{ color: "#4f7196" }}>
                    {content}
                  </a>
                )
              },
            },
          }}
        >
          {description}
        </Linkify>
        <CardMedia
          data-testid="audioPlayer"
          sx={{
            marginTop: "48px",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
            borderRadius: "30px",
          }}
          component="audio"
          controls
          src={currentTrack?.episodeUrl}
          alt={currentTrack?.episodeName}
        />
      </CardContent>
    </Card>
  )
}
