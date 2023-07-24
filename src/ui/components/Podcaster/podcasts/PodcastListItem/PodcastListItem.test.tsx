import { screen, render } from "@testing-library/react"
import { PodcastListItem } from "./PodcastListItem"
import { TestWithMemoryRouter } from "../../../../../utils/test-utils/TestWrapperComponent"


describe("PodcastListItem component tests", () => {
  const podcast = {
    "im:image": [{ label: "Image1 Test" }, { label: "Image2 Test" }, { label: "Image3 Test" }],
    "im:name": {
      label: "A name test label",
    },
    "im:artist": {
      label: "An artist test label",
    },
  }
  test("should render the component", () => {
    render(<PodcastListItem podcast={podcast} />, {
      wrapper: TestWithMemoryRouter,
    })
    screen.getByText(/An artist test label/i)
    screen.getByRole("img", { name: /A name test label/i })
  })
})
