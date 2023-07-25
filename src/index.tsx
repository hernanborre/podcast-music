/* eslint-disable @typescript-eslint/no-empty-function */
import { App } from "./App"

import React from "react"
import ReactDOM from "react-dom/client"
import { LoadingContextProvider } from "./infraestructure/ui/context/LoadingContext"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import "./index.css"

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById("root") as Element)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LoadingContextProvider value={{ isContextLoading: true, setIsContextLoading: () => {} }}>
        <App />
      </LoadingContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
