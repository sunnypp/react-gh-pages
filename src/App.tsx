import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { defaultTheme } from "./theme/theme"
import AboutMe from "./component/AboutMe"
import Experience from "./component/Experience"
import NonWork from "./component/NonWork"
import Gears from "./component/Gears"
import Menu from "./component/Menu"
import { Trans, withTranslation } from "react-i18next"
import LifeGoals from "./component/LifeGoals"
import { useEffect, useRef } from "react"
import toast, { Toaster } from "react-hot-toast"

const GlobalStyle = createGlobalStyle`
html, body {
  overflow-x: hidden;
}

body {
  background: ${(defaultTheme as any).palette.common.bright};
}
`

const Container = styled.div`
display: flex;
font-family: ${props => props.theme.typography.sansSerif};
flex: 0 1 auto;
flex-direction: column-reverse;
padding-bottom: ${props => props.theme.size.menu};
`

const HiddenBehind = styled.div`
bottom: calc(${props => props.theme.size.menu} + ${props => props.theme.size.size3});
color: ${props => props.theme.palette.common.hidden};
font-family: ${props => props.theme.typography.sansSerif};
font-size: ${props => props.theme.size.font.content};
left: 50%;
position: fixed;
text-align: center;
transform: translateX(-50%);
z-index: -1;

${props => props.theme.breakpoints.largerThanTablet} {
  font-size: ${props => props.theme.size.font.big};
}
`

function App({ t }: { t: any }) {
  const scrolledRef = useRef(false)
  const { hash } = window.location

  // modified from: https://ericdcobb.medium.com/scrolling-to-an-anchor-in-react-when-your-elements-are-rendered-asynchronously-8c64f77b5f34
  useEffect(() => {
    if (!scrolledRef.current) {
      if (!hash) {
        window.scrollTo({
          top: document.body.scrollHeight,
        })
        return
      }

      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        scrolledRef.current = true
      }
    }

    toast(t("message.goUp"), {
      id: "message.goUp",
      position: "top-center",
      icon: "⬆️",
      style: {
        fontFamily: (defaultTheme as any).typography.sansSerif,
      },
    })
  }, [hash, t])

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Toaster />
      <Menu />
      <Container>
        <AboutMe />
        <Experience />
        <NonWork />
        <Gears />
        <LifeGoals />
      </Container>
      <HiddenBehind><Trans i18nKey="hiddenGoUpHint">Please scroll <b>UP</b> to read more! ⬆️ Thanks 😘</Trans></HiddenBehind>
    </ThemeProvider>
  )
}

export default withTranslation()(App)
