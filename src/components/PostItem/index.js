import PropTypes from "prop-types"
import React from "react"
import * as S from "./styled"

const PostItem = ({
  slug,
  category,
  date,
  timeToRead,
  title,
  description,
  background,
  color,
}) => (
  <S.PostItemLink cover direction="right" duration={0.5} bg="#15202b" to={slug}>
    <S.PostItemWrapper>
      <S.PostItemTag background={background} color={color}>
        {category}
      </S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          {date} • {timeToRead}
        </S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
}

export default PostItem
