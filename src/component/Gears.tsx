import { Trans, withTranslation } from "react-i18next"
import styled from "styled-components"
import { DesktopContainer } from "./DesktopContainer"
import { Em, Small, StickyTitle, Subtitle } from "./Title"

const Gears = styled.div`
background: ${props => props.theme.palette.gears.background};
font-size: ${props => props.theme.size.font.content};
line-height: 1.5;
padding: ${props => props.theme.size.menu} ${props => props.theme.size.size3} ${props => props.theme.size.size3};
position: relative;
z-index: 2;

${props => props.theme.breakpoints.largerThanTablet} {
  font-size: ${props => props.theme.size.font.desktop};
}
`

const Component = ({ t }: { t: any }) => <Gears>
  <DesktopContainer>
    <Subtitle>{t("gears.lists.0.name")}</Subtitle>
    <Trans i18nKey="gears.lists.0.description">
      Inspired by <a href="https://youtu.be/CftAs56ar48" target="_blank">this video</a>, I use such a large screen as freely-movable-and-rotatable 27-inch monitors. And I often open 6+ files using 2/3 of my screen leaving 1/3 for browsers and messaging. 📺
    </Trans>
    <br/><br/>

    <Subtitle>{t("gears.lists.1.name")}</Subtitle>
    {t("gears.lists.1.description")}
    <br/><br/>

    <Subtitle>{t("gears.lists.2.name")}</Subtitle>
    {t("gears.lists.2.description")}
    <br/><br/>

    <Subtitle id="gears">{t("gears.lists.3.name")}</Subtitle>
    {t("gears.lists.3.description")}
    <br/><br/>

    <Subtitle>{t("gears.lists.4.name")}</Subtitle>
    {t("gears.lists.4.description")}
    <br/><br/>

    <Small>{t("gears.extraInfo")}</Small>
    <br/>

  </DesktopContainer>
  <StickyTitle><Em>{t("gears.title")}</Em></StickyTitle>
</Gears>

export default withTranslation()(Component)
