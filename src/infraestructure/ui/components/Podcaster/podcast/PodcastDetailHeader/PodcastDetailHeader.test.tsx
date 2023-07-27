import { screen, render } from "@testing-library/react"
import { TestWithMemoryRouter } from "../../../../../../utils/test-utils/TestWrapperComponent"
import { PodcastDetailHeader } from "./PodcastDetailHeader"
import "@testing-library/jest-dom/extend-expect"
import { tracksDataMock } from "../../../../../../utils/test-utils/PodcastModelMocks"

describe("PodcastDetailHeader component tests suite", () => {

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
