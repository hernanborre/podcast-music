import { screen, render } from "@testing-library/react"
import { TestWithMemoryRouter } from "../../../../utils/test-utils/TestWrapperComponent"
import { PodcastDetailHeader } from "./PodcastDetailHeader"
import "@testing-library/jest-dom/extend-expect"

describe("PodcastDetailHeader component tests suite", () => {
  test("PodcastDetailHeader should be rendered", () => {
    render(<PodcastDetailHeader />, {
      wrapper: TestWithMemoryRouter,
    })
    screen.getByText(/Episodes/i)
  })
  test("should render the correct number of episodes", () => {
    const tracksData = {
      results: [
        {
          artistId: 3691215,
          collectionId: 696969,
          trackId: 13131313,
          trackTimeMillis: 22091950,
          artistName: "Test Artist 1",
          collectionName: "Test Collection 1",
          trackName: "Test Track 1",
          trackCount: 2,
          releaseDate: "1986-03-13T07:03:84Z",
        },
        {
          artistId: 3691215,
          collectionId: 696969,
          trackId: 191919,
          trackTimeMillis: 24121950,
          artistName: "Test Artist 2",
          collectionName: "Test Collection 2",
          trackName: "Test Track 2",
          releaseDate: "2021-09-22T09:00:00Z",
        },
      ],
    }
    render(<PodcastDetailHeader tracksData={tracksData} />, {
      wrapper: TestWithMemoryRouter,
    })
    const headerNumber = screen.getByText(/2/i)
    expect(headerNumber).toBeInTheDocument()
  })
})
