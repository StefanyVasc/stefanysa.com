import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as S from "../components/ListWrapper/styled"
import Pagination from "../components/Pagination"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Home" />
      <S.ListWrapper>
        {postList.map(
          ({
            node: {
              fields: { slug },
              frontmatter: {
                background,
                category,
                date,
                description,
                title,
                color,
              },
              timeToRead,
            },
          }) => (
            <PostItem
              key={date}
              slug={slug}
              category={category}
              date={date}
              timeToRead={`${timeToRead} minuto(s) de leitura`}
              title={title}
              description={description}
              background={background}
              color={color}
            />
          )
        )}
      </S.ListWrapper>

      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            background
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
            color
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogList
