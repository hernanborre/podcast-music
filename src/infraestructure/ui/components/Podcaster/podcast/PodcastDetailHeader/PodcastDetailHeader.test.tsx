import { screen, render } from "@testing-library/react"
import { TestWithMemoryRouter } from "../../../../../../utils/test-utils/TestWrapperComponent"
import { PodcastDetailHeader } from "./PodcastDetailHeader"
import "@testing-library/jest-dom/extend-expect"
import { PodcastDetailResponseDTO } from "@/infraestructure/repository/dtos/PodcastDetail/PodcastDetailResponseDTO"
import { PodcastDetail } from "@/domain/models"

describe("PodcastDetailHeader component tests suite", () => {
  let tracksDataMock: PodcastDetail[]
  beforeAll(() => {
    tracksDataMock = 
      [
        {
          trackId: "13131313",
          trackTimeMillis: 22091950,
          trackName: "Test Track 1",
          episodeUrl: "https://lalala.test.com/episode=3", 
          trackCount: 2,
          releaseDate: "1986-03-13T07:03:84Z",
          description: "A brief description of this podcast lorem ipsum test 2", 
          shortDescription: "Shorty descriptions 2", 
          collectionId: 324234
        },
        {
          trackCount: 3,
          episodeUrl: "https://lalala.test.com/episode=3",
          trackId: "191919",
          trackTimeMillis: 24121950,
          trackName: "Test Track 2",
          releaseDate: "2021-09-22T09:00:00Z",
          description: "A brief description of this podcast lorem ipsum test 3", 
          shortDescription: "Shorty descriptions 3", 
          collectionId: 324234
        },
      ]
    
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
