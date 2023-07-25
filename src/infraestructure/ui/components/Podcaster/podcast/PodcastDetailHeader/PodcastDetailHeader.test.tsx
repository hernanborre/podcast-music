import { screen, render } from "@testing-library/react"
import { TestWithMemoryRouter } from "../../../../../../utils/test-utils/TestWrapperComponent"
import { PodcastDetailHeader } from "./PodcastDetailHeader"
import "@testing-library/jest-dom/extend-expect"
import { PodcastDetailResponse } from "@/infraestructure/repository/dtos/PodcastDetail/PodcastDetailResponseDTO"

describe("PodcastDetailHeader component tests suite", () => {
  let tracksDataMock: PodcastDetailResponse
  beforeAll(() => {
    tracksDataMock = {
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
    return tracksDataMock
  });  
  test("PodcastDetailHeader should be rendered", () => {
    render(<PodcastDetailHeader tracksData={tracksDataMock} />, {
      wrapper: TestWithMemoryRouter,
    })
    screen.getByText(/Episodes/i)
  })
  test("should render the correct number of episodes", () => {
    
    render(<PodcastDetailHeader tracksData={tracksDataMock} />, {
      wrapper: TestWithMemoryRouter,
    })
    const headerNumber = screen.getByText(/2/i)
    expect(headerNumber).toBeInTheDocument()
  })
})
