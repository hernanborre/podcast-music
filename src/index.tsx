/* eslint-disable @typescript-eslint/no-empty-function */
import { App } from "./App"

import React from "react"
import ReactDOM from "react-dom/client"
import { LoadingContextProvider } from "./infraestructure/ui/context/LoadingContext"

import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root") as Element)
root.render(
  <React.StrictMode>
    <LoadingContextProvider value={{ isContextLoading: true, setIsContextLoading: () => {} }}>
      <App />
    </LoadingContextProvider>
  </React.StrictMode>
)
