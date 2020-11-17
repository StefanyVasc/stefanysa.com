import React from "react"
import Layout from "../components/Layout"
import Search from "../components/Search"
import SEO from "../components/seo"

const SearchPage = () => (
  <Layout>
    <SEO
      title="Search"
      description="Vai lá, não tenha medo. Busque por posts novos e bem antigos."
    />
    <Search />
  </Layout>
)

export default SearchPage
