import { Link } from "gatsby"
import React from "react"
import * as S from "../components/About/styled.js"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import SkillsIcons from "../components/SkillsIcons"
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
        <p>
          Oi, eu sou o Goku!... Não pera{" "}
          <span role="img" aria-label="smile">
            😅
          </span>
          ...
        </p>
        ...Olá, me chamo Stefany Vasconcelos de Sá, sou de Recife-PE{" "}
        <span role="img" aria-label="coqueiro">
          🌴
        </span>
        , trabalho no{" "}
        <Link to="https://www.cesar.org.br" target="__blank">
          CESAR{" "}
        </Link>
        como Consultora de Qualificação e sou Front End Developer (Aspirante a
        Dev Full Stack). Sou formada em <strong>Eletromecânica</strong> pelo
        SENAI (2012) e estou na reta final da graduação em{" "}
        <strong>Sistemas de Informação</strong> pela UFRPE.
      </p>
      <p>
        No meu tempo livre, eu gosto de tocar instrumentos de corda (Violão,
        Ukulele e Cavaquinho), jogar na{" "}
        <Link to="https://steamcommunity.com/id/SteVasc/" target="_blank">
          Steam
        </Link>{" "}
        , ouvir música (playlist top para programar{" "}
        <Link
          to="https://open.spotify.com/playlist/2w8GYqYdH6ve3g0nGcJcgE?si=7bCl8yynR2Saz4VPR6mDXQ"
          target="_blank"
        >
          aqui{" "}
        </Link>
        <span role="img" aria-label="music">
          🎶
        </span>
        ) e passar o conhecimento adiante... afinal conhecimento compartilhado é
        conhecimento que não se perde!{" "}
        <span role="img" aria-label="smile com óculos escuros">
          😎
        </span>
      </p>

      <h2>Habilidades</h2>
      <p>
        Aqui abaixo estão listadas tecnologias que já sei e que estou
        aprendendo.
      </p>
      <SkillsIcons />

      <h2>Foco</h2>
      <p>
        Atualmente estou focada no desenvolvimento Web Full Stack com
        Javascript, para que isso seja possível venho estudando bastente e
        fazendo cursos na{" "}
        <Link to="https://www.origamid.com" target="_blank">
          Origamid{" "}
        </Link>
        , bootcamp GoStack da{" "}
        <Link to="https://www.origamid.com" target="_blank">
          Rocketseat
        </Link>{" "}
        e React Avançado do{" "}
        <Link to="https://www.willianjusten.com.br" target="_blank">
          Willian Justen
        </Link>
        , então boa parte dos posts serão sobre meu aprendizado dentro desses
        cursos. Venho estudando a fundo tecnologias como Node, React, React
        Native e todo o ecossistema JS por volta dessas tecnologias, sem
        esquecer de focar nos testes.{" "}
        <span role="img" aria-label="smile happy">
          😊
        </span>
      </p>
      <h2>Contato</h2>
      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais.
      </p>
      <SocialLinks hideStyle />
    </S.MainContent>
  </Layout>
)

export default AboutPage
