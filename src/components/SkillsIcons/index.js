import React from "react"
import links from "./content"
import Icons from "./Icons"
import * as S from "./styled"

const SkillsIcons = () => (
  <S.SkillsIconsWrapper>
    <S.SkillsIconsList>
      {links.map((link, index) => {
        const Icon = Icons[link.label]

        return (
          <S.SkillsIconsItem key={index}>
            <S.SkillsIconsLink
              href="#"
              title={link.label}
              rel="noopener noreferrer"
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.SkillsIconsLink>
          </S.SkillsIconsItem>
        )
      })}
    </S.SkillsIconsList>
  </S.SkillsIconsWrapper>
)

export default SkillsIcons
