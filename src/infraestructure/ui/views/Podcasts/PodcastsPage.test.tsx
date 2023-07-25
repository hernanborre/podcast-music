import { screen, render } from "@testing-library/react"

import { PodcastsPage } from "./PodcastsPage"
import { TesWithBrowserRouter } from "../../../../utils/test-utils/TestWrapperComponent"

describe("PodcastsPage component tests", () => {
  test("renders a list of 100 items at PodcastsPage component", async () => {

    render(
      <TesWithBrowserRouter>
        <PodcastsPage />
      </TesWithBrowserRouter>
    )
    const listItems = await screen.findAllByText(/author/i)
    expect(listItems).toHaveLength(100)
  })
})
