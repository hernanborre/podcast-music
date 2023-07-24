import { BrowserRouter as Router } from "react-router-dom"

import { Layout } from "./ui/components/Layout/Layout"
import { Header } from "./ui/components/Header/Header"
import { Home } from "./ui/Podcaster/Home";

export function App() {
  return (
    <Router>
      <Layout header={<Header />}>
        <Home />
      </Layout>
    </Router>
  )
}


