import styled from "styled-components"

export const SkillsIconsWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`

export const SkillsIconsList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  list-style: none !important;
`

export const SkillsIconsItem = styled.li`
  margin-right: 3rem;
`

export const SkillsIconsLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: var(--highlight);
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`
