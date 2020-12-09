import { graphql } from "gatsby"
import React from "react"
import Comments from "../components/Comments"
import Layout from "../components/Layout"
import * as S from "../components/Post/styled"
import RecommendedPosts from "../components/RecommendedPosts"
import SEO from "../components/seo"

const BlogPost = ({ data, pageContext }) => {
  const { title, description, date, image } = data.markdownRemark.frontmatter
  const { timeToRead, html, fields } = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    <Layout>
      <SEO title={title} description={description} image={image} />
      <S.PostHeader>
        <S.PostDate>
          {date} • {timeToRead} min de leitura
        </S.PostDate>
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostDescription>{description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </S.MainContent>

      <RecommendedPosts next={next} previous={previous} />

      <Comments url={fields.slug} title={title} />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        image
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
