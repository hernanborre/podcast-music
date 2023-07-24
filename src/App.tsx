import { BrowserRouter as Router } from "react-router-dom"

import { Layout } from "./components/Layout/Layout"
import { Header } from "./components/Header/Header"
import { Home } from "./pages/Podcaster/Home";

export function App() {
  return (
    <Router>
      <Layout header={<Header />}>
        <Home />
      </Layout>
    </Router>
  )
}


