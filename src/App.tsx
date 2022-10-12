import styled, { ThemeProvider } from 'styled-components'
import i18n from './i18n'
import { defaultTheme } from './theme/theme'
import AboutMe from './component/AboutMe'
import { withTranslation } from 'react-i18next'

const Menu = styled.nav`
align-items: center;
background: ${props => props.theme.palette.menu.background};
bottom: 0;
display: flex;
flex-direction: row;
height: 70px;
position: fixed;
width: 100%;
z-index: 9999;
`

const IconButton = styled.a`
color: ${props => props.theme.palette.menu.text};
display: flex;
flex: 1;
flex-direction: column;
align-items: center;
font-size: 12px;
padding: ${props => props.theme.size.size1};
text-align: center;
text-decoration: none;
transition: background .3s;

:hover {
background: ${props => props.theme.palette.menu.hover};
}
`

const IconImage = styled.img`
display: block;
height: 48px;
width: 48px;
`

function App({ t }: { t: any }) {
  return (
      <ThemeProvider theme={defaultTheme}>
        <AboutMe />
        <button onClick={() => i18n.changeLanguage("zh")}>Click</button>
      </ThemeProvider>
  )
}

export default withTranslation()(App)
