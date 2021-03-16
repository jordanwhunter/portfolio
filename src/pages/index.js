import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Portfolio from "../components/Portfolio"
import About from "../components/About"
import Socials from "../components/Socials"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Portfolio heading="Portfolio" />
    <About />
    <Socials />
  </Layout>
)

export default IndexPage
