import { screen, render, waitFor } from "@testing-library/react"
import { PodcastDetailEpisodesList } from "./PodcastDetailEpisodesList"
import { TestWithMemoryRouter } from "../../../../../../utils/test-utils/TestWrapperComponent"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom/extend-expect"
import { PodcastDetailResponse } from "@/infraestructure/repository/dtos/PodcastDetail/PodcastDetailResponseDTO"

const mockedLink = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: (props : any) => <div {...props} onClick={mockedLink} />,
}))

describe("PodcastDetailEpisodesList component tests", () => {
  const tracksDataMock: PodcastDetailResponse = {
    resultCount:51,
    results: [
      {
        collectionId: 696969,
        trackId: 13131313,
        trackTimeMillis: 22091950,
        collectionName: "Test Collection 1",
        trackName: "Test Track 1",
        trackCount: 2,
        releaseDate: "1986-03-13T07:03:84Z",
        description: "A brief description of this podcast lorem ipsum test"
      },
      {
        collectionId: 696969,
        trackCount: 3,
        trackId: 191919,
        trackTimeMillis: 24121950,
        collectionName: "Test Collection 2",
        trackName: "Test Track 2",
        releaseDate: "2021-09-22T09:00:00Z",
        description: "A brief description of this podcast lorem ipsum test 2"
      },
    ],
  }
  test("should render PodcastDetailEpisodesList component", () => {
    render(
      <TestWithMemoryRouter>
        <PodcastDetailEpisodesList tracksData={tracksDataMock} />
      </TestWithMemoryRouter>
    )
    screen.getByText(/Date/i)
    screen.getByText(/Title/i)
    screen.getByText(/Duration/i)
  })

  test("should render a list of clickable elements", async () => {
    const user = userEvent.setup()
    render(
      <TestWithMemoryRouter>
        <PodcastDetailEpisodesList tracksData={tracksDataMock} />
      </TestWithMemoryRouter>
    )
    const linkList = screen.getAllByTestId("episodeLink")
    await user.click(linkList[0])
    await waitFor(() => expect(mockedLink).toHaveBeenCalled())
  })
})
