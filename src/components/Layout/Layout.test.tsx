import { Layout } from "./Layout";
import { Header } from "../Header/Header";
import { render, screen } from "@testing-library/react";
import { TestWithMemoryRouter } from "../../utils/test-utils/TestWrapperComponent";
import "@testing-library/jest-dom/extend-expect";

describe("Layout tests", () => {
  test("if Layout component is rendered", () => {
    render(
      <TestWithMemoryRouter>
        <Layout header={<Header />} />
      </TestWithMemoryRouter>
    );
    const title = screen.getByText(/Podcaster/i);
    expect(title).toBeInTheDocument();
  });
});