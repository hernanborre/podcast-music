import { screen, render, waitFor } from "@testing-library/react"
import { PodcastDetailEpisodesList } from "./PodcastDetailEpisodesList"
import { TestWithMemoryRouter } from "../../../../../../utils/test-utils/TestWrapperComponent"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom/extend-expect"
import { tracksDataMock } from "../../../../../../utils/test-utils/PodcastModelMocks"
const mockedLink = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: (props: any) => <div {...props} onClick={mockedLink} />
}))

describe("PodcastDetailEpisodesList component tests", () => {
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
