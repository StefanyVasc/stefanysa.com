import {
  ArrowLeftOutline,
  ArrowRightOutline,
} from "@styled-icons/evaicons-outline"
import { Link } from "gatsby"
import propTypes from "prop-types"
import React from "react"
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
      <Link to={prevPage}>
        <ArrowLeftOutline size="36" /> página anterior
      </Link>
    )}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && (
      <Link to={nextPage}>
        {" "}
        próxima página
        <ArrowRightOutline size="36" />
      </Link>
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
