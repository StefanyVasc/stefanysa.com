import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Page</h1>
    <Link to="/" activeStyle={{ color: "Blue" }}>
      Home
    </Link>
  </Layout>
)

export default AboutPage
