import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { PodcastDetailCard } from "./PodcastDetailCard"
import { TestWithMemoryRouter } from "../../../../../../utils/test-utils/TestWrapperComponent"

const mockedLink = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: (props :any) => <div {...props} onClick={mockedLink} />,
}))

describe("PodcastDetailCard component tests", () => {
  const podcastId = "131313"
  const podcast = {
    "im:artist": {
      attributes: {
        href: "https://podcasts.apple.com/us/artist/testpodcast/131313",
      },
      label: "TestLabel",
    },
    "im:name": {
      label: "Name of the podcast test!",
    },
    "im:image": [
      {
        attributes: {
          height: "180",
        },
        label: "https://i8n-ssl.staticdn.com/image/thumb/Podcasts678/v4/9a/1f/5e/ad26e449-1c37-4368-b8ee-6b805cd4e1c5/liza_130000000000000000.jpg/400x4000bb.png",
      },
      {
        attributes: {
          height: "400",
        },
        label: "https://i8n-ssl.staticdn.com/image/thumb/Podcasts678/v4/9a/1f/5e/ad26e449-1c37-4368-b8ee-6b805cd4e1c5/liza_130000000000000000.jpg/400x400bb.png",
      },
      {
        attributes: {
          height: "400",
        },
        label: "https://i8n-ssl.staticdn.com/image/thumb/Podcasts678/v4/9a/1f/5e/ad26e449-1c37-4368-b8ee-6b805cd4e1c5/liza_130000000000000000.jpg/400x400bb.png",
      },
    ],
    summary: {
      label: "This a complete mocked summary, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas congue sapien vel bibendum. Suspendisse potenti. Sed id porta est. Praesent risus tellus, hendrerit et vestibulum sed, eleifend sed odio. Nullam mollis turpis sit amet dui sodales pretium. Pellentesque et odio at lectus ullamcorper rutrum. Pellentesque pulvinar rutrum odio at.",
    },
  }
  test("should render the PodcastDetailCard component", () => {
    render(
      <TestWithMemoryRouter>
        {/* <PodcastDetailCard podcastId={podcastId} podcast={podcast} /> */}
      </TestWithMemoryRouter>
    )
    expect(screen.getByText(/Name of the podcast test!?/i)).toBeTruthy()
  })
  test("should redirect to the podcast detail page when the user clicks on the podcast title", async () => {
    render(
      <TestWithMemoryRouter>
        {/* <PodcastDetailCard podcastId={podcastId} podcast={podcast} /> */}
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
