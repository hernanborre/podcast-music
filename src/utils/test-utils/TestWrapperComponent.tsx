/* eslint-disable @typescript-eslint/no-empty-function */
import { BrowserRouter, MemoryRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { LoadingContextProvider } from "../../context/LoadingContext"

const queryClient = new QueryClient()

export const TesWithBrowserRouter = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingContextProvider value={{ isContextLoading: false, setIsContextLoading: () => {} }}>
        <BrowserRouter>{children}</BrowserRouter>
      </LoadingContextProvider>
    </QueryClientProvider>
  )
}

export const TestWithMemoryRouter = ({ children } : any) => {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingContextProvider value={{ isContextLoading: false, setIsContextLoading: () => {} }}>
        <MemoryRouter>{children}</MemoryRouter>
      </LoadingContextProvider>
    </QueryClientProvider>
  )
}
