/* eslint-disable @typescript-eslint/no-empty-function */
import { BrowserRouter, MemoryRouter } from "react-router-dom"
import { LoadingContextProvider } from "../../infraestructure/ui/context/LoadingContext"

export const TesWithBrowserRouter = ({ children }: any) => {
  return (
    <LoadingContextProvider value={{ isContextLoading: false, setIsContextLoading: () => {} }}>
      <BrowserRouter>{children}</BrowserRouter>
    </LoadingContextProvider>
  )
}

export const TestWithMemoryRouter = ({ children }: any) => {
  return (
    <LoadingContextProvider value={{ isContextLoading: false, setIsContextLoading: () => {} }}>
      <MemoryRouter>{children}</MemoryRouter>
    </LoadingContextProvider>
  )
}
