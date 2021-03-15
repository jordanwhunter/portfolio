import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Portfolio from "../components/Portfolio"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Portfolio heading="My Current Projects"/>
  </Layout>
)

export default IndexPage
