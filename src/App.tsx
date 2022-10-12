import styled, { ThemeProvider } from 'styled-components'
import i18n from './i18n'
import { defaultTheme } from './theme/theme'
import AboutMe from './component/AboutMe'
import Menu from './component/Menu'
import { withTranslation } from 'react-i18next'

function App({ t }: { t: any }) {
  return (
      <ThemeProvider theme={defaultTheme}>
        <Menu />
        <AboutMe />
        <button onClick={() => i18n.changeLanguage("zh")}>Click</button>
      </ThemeProvider>
  )
}

export default withTranslation()(App)
