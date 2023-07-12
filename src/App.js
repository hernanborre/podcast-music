import { BrowserRouter as Router } from "react-router-dom"
import { Header } from "./components/Header/Header"
import { Layout } from "./components/Layout/Layout"

export function App() {
  return (
    <Router>
      <Layout header={<Header />}>
        <h1>Podcast</h1>
      </Layout>
    </Router>
  )
}


