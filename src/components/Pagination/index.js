import {
  ArrowLeftOutline,
  ArrowRightOutline,
} from "@styled-icons/evaicons-outline"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import propTypes from "prop-types"
import React from "react"
import getThemeColor from "../../utils/getThemeColor"
import * as S from "./styled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && (
      <AniLink cover direction="left" duration={0.5} bg="#15202b" to={prevPage}>
        <ArrowLeftOutline size="36" /> página anterior
      </AniLink>
    )}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && (
      <AniLink
        cover
        direction="right"
        duration={0.5}
        bg={getThemeColor()}
        to={nextPage}
      >
        {" "}
        próxima página
        <ArrowRightOutline size="36" />
      </AniLink>
    )}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination
