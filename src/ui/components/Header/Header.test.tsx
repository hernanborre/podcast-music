import { Header } from "./Header"
import { render, screen } from "@testing-library/react"
import { TestWithMemoryRouter } from "../../../utils/test-utils/TestWrapperComponent"
import userEvent from "@testing-library/user-event"
import { waitFor } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

const mockedLink = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: (props : any) => <div {...props} onClick={mockedLink} />,
}))

describe("Header component tests", () => {
  test("if the Header component is rendered", () => {
    render(
      <TestWithMemoryRouter>
        <Header />
      </TestWithMemoryRouter>
    )
    const title = screen.getByText(/Podcaster/i)
    expect(title).toBeInTheDocument()
  })
  test("click on title redirects to Home", async () => {
    render(
      <TestWithMemoryRouter>
        <Header />
      </TestWithMemoryRouter>
    )
    const user = userEvent.setup()
    const title = screen.getByTestId("headerHomeLink")
    user.click(title)
    await waitFor(() => expect(mockedLink).toHaveBeenCalled())
  })
})
