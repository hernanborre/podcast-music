import { screen, render } from "@testing-library/react"
import { PodcastListItem } from "./PodcastListItem"
import { TestWithMemoryRouter } from "../../../../../../utils/test-utils/TestWrapperComponent"
import { PodcastEpisode } from "@/domain/models"
import { podcastEpisodeMock } from "../../../../../../utils/test-utils/PodcastModelMocks"


describe("PodcastListItem component tests", () => {
  const podcast: PodcastEpisode = podcastEpisodeMock
  test("should render the component", () => {
    render(<PodcastListItem podcast={podcast} />, {
      wrapper: TestWithMemoryRouter,
    })
    screen.getByText(/An artist test label/i)
    screen.getByRole("img", { name: /Name of the podcast test!/i })
  })
})
