import React from "react"
import * as S from "../components/About/styled.js"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import SocialLinks from "../components/SocialLinks"

const AboutPage = () => (
  <Layout>
    <SEO
      title="About"
      description="Saiba um pouco mais sobre a desenvolvedora por trás deste blog."
    />
    <S.MainContent>
      <h1>Sobre mim</h1>
      <p>
        Me chamo Stefany Vasconcelos de Sá, sou de em Recife-PE, trabalho no
        CESAR como Consultora de Qualificação e Front-End Developer. Sou formada
        em <strong>Eletromecânica</strong> pelo SENAI (2012) e estou na reta
        final da graduação em <strong>Sistemas de Informação</strong> pela
        UFRPE.
      </p>

      <h2>Habilidades</h2>
      <h2>Contato</h2>
      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais ou e-mail.
      </p>
      <SocialLinks hideStyle />
    </S.MainContent>
  </Layout>
)

export default AboutPage
