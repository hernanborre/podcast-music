import { BrowserRouter as Router } from "react-router-dom"

import { Layout } from "./infraestructure/ui/components/Layout/Layout"
import { Header } from "./infraestructure/ui/components/Header/Header"
import { Home } from "./infraestructure/ui/views/Home";

export function App() {
  return (
    <Router>
      <Layout header={<Header />}>
        <Home />
      </Layout>
    </Router>
  )
}


