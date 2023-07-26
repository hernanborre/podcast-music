import { Link } from "react-router-dom"
import moment from "moment"
import { Table, TableContainer } from "@mui/material"
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import Paper from "@mui/material/Paper"
import { PodcastDetailResponseDTO } from "@/infraestructure/repository/dtos/PodcastDetail/PodcastDetailResponseDTO"
import { PodcastDetailDTO } from "@/infraestructure/repository/dtos/PodcastDetail/PodcastDetailDTO"
import { PodcastDetail } from "@/domain/models"

export const PodcastDetailEpisodesList = ({ tracksData }: { tracksData: PodcastDetail[] | undefined | null}) => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: "16px", boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.2)" }}>
      <Table sx={{ minWidth: 600 }} aria-label="tracks-list">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Title</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Date</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Duration</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tracksData?.map((row: PodcastDetail, i: number) => {
            if (i === 0) return null
            return (
              <TableRow key={row.trackId} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <Link to={`/podcast/${row.collectionId}/episode/${row.trackId}`} data-testid="episodeLink">
                    {row.trackName}
                  </Link>
                </TableCell>
                <TableCell align="right">{new Intl.DateTimeFormat("es").format(new Date(row.releaseDate))}</TableCell>
                <TableCell align="right">{moment.utc(row.trackTimeMillis).format("HH:mm")}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
