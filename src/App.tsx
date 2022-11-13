import styled, { ThemeProvider } from "styled-components"
import { defaultTheme } from "./theme/theme"
import AboutMe from "./component/AboutMe"
import Experience from "./component/Experience"
import NonWork from "./component/NonWork"
import Gears from "./component/Gears"
import Menu from "./component/Menu"
import { withTranslation } from "react-i18next"
import LifeGoals from "./component/LifeGoals"
import { useEffect, useRef } from "react"

const Container = styled.div`
display: flex;
font-family: ${props => props.theme.typography.sansSerif};
flex: 0 1 auto;
flex-direction: column-reverse;
overflow-x: clip;
padding-bottom: ${props => props.theme.size.menu};
`

function App() {
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
  }, [hash])

  return (
    <ThemeProvider theme={defaultTheme}>
      <Menu />
      <Container>
        <AboutMe />
        <Experience />
        <NonWork />
        <Gears />
        <LifeGoals />
      </Container>
    </ThemeProvider>
  )
}

export default withTranslation()(App)
