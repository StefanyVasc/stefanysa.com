import propTypes from "prop-types"
import React from "react"
import * as S from "./styled"

const RecommendedPosts = ({ next, previous }) => (
  <S.RecommendedWrapper>
    {previous && (
      <S.RecommendedLink
        cover
        direction="left"
        duration={0.5}
        bg="#15202b"
        to={previous.fields.slug}
        className="previous"
      >
        {previous.frontmatter.title}
      </S.RecommendedLink>
    )}
    {next && (
      <S.RecommendedLink
        cover
        direction="right"
        duration={0.5}
        bg="#15202b"
        to={next.fields.slug}
        className="next"
      >
        {next.frontmatter.title}
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
)

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({ title: propTypes.string.isRequired }),
    fields: propTypes.shape({ slug: propTypes.string.isRequired }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({ title: propTypes.string.isRequired }),
    fields: propTypes.shape({ slug: propTypes.string.isRequired }),
  }),
}

export default RecommendedPosts
