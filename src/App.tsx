import styled, { ThemeProvider } from "styled-components"
import i18n from "./i18n"
import { defaultTheme } from "./theme/theme"
import AboutMe from "./component/AboutMe"
import Experience from "./component/Experience"
import Menu from "./component/Menu"
import { withTranslation } from "react-i18next"

const Container = styled.div`
display: flex;
font-family: ${props => props.theme.typography.sansSerif};
flex: 0 1 auto;
flex-direction: column-reverse;
overflow-x: clip;
padding-bottom: ${props => props.theme.size.menu};
`

function App({ t }: { t: any }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Menu />
      <Container>
        <AboutMe />
        <Experience />
      </Container>
    </ThemeProvider>
  )
}

export default withTranslation()(App)
