import { Trans, withTranslation } from "react-i18next"
import styled from "styled-components"
import ExperiencePhoto from "../asset/photo/experience.jpg"
import { Title } from "./Title"

const Experience = styled.div`
background-color: ${props => props.theme.palette.experience.background};
background-image: url(${ExperiencePhoto});
background-position-y: bottom;
background-repeat: no-repeat;
background-size: 100%;
font-size:  30px;
line-height: 48px;
/* as 100% is the image width, taking aspect ratio into account */
padding: 0 ${props => props.theme.size.size3} 40vw;
position: relative;
`

const StickyTitle = styled(Title)`
display: inline-block;
position: sticky;
bottom: calc(${props => props.theme.size.menu} + 10px);
background: ${props => props.theme.palette.experience.highlight};
`

const Em = styled.span`
background: ${props => props.theme.palette.experience.highlight};
`

const Component = ({ t }: { t: any }) => <Experience id="experience">
  {t("aboutMe.greetings")}
  <StickyTitle>{t('experience.title')}</StickyTitle>
</Experience>

export default withTranslation()(Component)
