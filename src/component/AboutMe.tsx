import { Trans, withTranslation } from "react-i18next"
import styled from "styled-components"
import sunnyToastPhoto from '../asset/photo/sunny_toast.png'
import { Title } from "./Title"

const AboutMe = styled.div`
background: ${props => props.theme.palette.aboutMe.background};
font-size:  30px;
line-height: 48px;
overflow: hidden;
padding: ${props => props.theme.size.size3};
position: relative;
`

const Photo = styled.img`
position: absolute;
width: 30%;
top: 10px;
right: -20px;
transform: rotate(-10deg);
`

const Name = styled.span`
font-weight: 900;
`

const Em = styled.span`
background: ${props => props.theme.palette.aboutMe.highlight};
`

const Greetings = styled.div`
position: relative;
z-index: 1;
`

const Component = ({ t }: { t: any }) => <AboutMe id="aboutMe">
  <Photo src={sunnyToastPhoto}></Photo>
  <Title>{t('aboutMe.title')}</Title>
  <Greetings>
    <Trans i18nKey="aboutMe.greetings">hi! I'm <Name>Sunny Pun</Name>, a <Em>Passionate Programmer</Em> who also cares about <Em>Design & Product</Em>, for the sake of <Em>next generations</Em>.</Trans>
  </Greetings>
</AboutMe>

export default withTranslation()(Component)
