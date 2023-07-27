import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { PodcastDetailCard } from "./PodcastDetailCard"

import { TestWithMemoryRouter } from "../../../../../../utils/test-utils/TestWrapperComponent"
import { podcastEpisodeMock } from "../../../../../../utils/test-utils/PodcastModelMocks"

const mockedLink = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: (props: any) => <div {...props} onClick={mockedLink} />
}))

describe("PodcastDetailCard component tests", () => {
  const podcast = podcastEpisodeMock
  const podcastId = podcastEpisodeMock.id

  test("should render the PodcastDetailCard component", () => {
    render(
      <TestWithMemoryRouter>
        <PodcastDetailCard podcastId={podcastId} podcast={podcast} />
      </TestWithMemoryRouter>
    )
    expect(screen.getByText(/Name of the podcast test!?/i)).toBeTruthy()
  })
  test("should redirect to the podcast detail page when the user clicks on the podcast title", async () => {
    render(
      <TestWithMemoryRouter>
        <PodcastDetailCard podcastId={podcastId} podcast={podcastEpisodeMock} />
      </TestWithMemoryRouter>
    )
    const user = userEvent.setup()
    const cardLink = screen.getByTestId("podcast-detail-card-link-test-id")
    await user.click(cardLink)
    await waitFor(() => {
      expect(mockedLink).toHaveBeenCalled()
    })
  })
})
