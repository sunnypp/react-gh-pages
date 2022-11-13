import { withTranslation } from "react-i18next"
import styled from "styled-components"
import { DesktopContainer } from "./DesktopContainer"
import { StickyTitle } from "./Title"

const LifeGoals = styled.div`
background: ${props => props.theme.palette.lifeGoals.background};
color: ${props => props.theme.palette.lifeGoals.content};
font-size: ${props => props.theme.size.font.content};
line-height: 1.5;
padding: ${props => props.theme.size.menu} ${props => props.theme.size.size3} ${props => props.theme.size.size3};
position: relative;
`

const Goals = styled.div`
margin: ${props => props.theme.size.size4} 0 ${props => props.theme.size.menu};
text-align: center;
`

const Goal = styled.div`
font-size: ${props => props.theme.size.font.big};
margin-bottom: ${props => props.theme.size.size3};

${props => props.theme.breakpoints.largerThanTablet} {
  font-size: ${props => props.theme.size.font.bigger};
}
`

const Component = ({ t }: { t: any }) => <LifeGoals id="lifeGoals">
  <DesktopContainer>
    {t("lifeGoals.abstract")}<br/>
    <Goals>
      <Goal>{t("lifeGoals.lists.0")}</Goal>
      <Goal>{t("lifeGoals.lists.1")}</Goal>
      <Goal>{t("lifeGoals.lists.2")}</Goal>
      <Goal>{t("lifeGoals.lists.3")}</Goal>
      <Goal>{t("lifeGoals.lists.4")}</Goal>
    </Goals>
  </DesktopContainer>
  <StickyTitle>{t("lifeGoals.title")}</StickyTitle>
</LifeGoals>

export default withTranslation()(Component)
