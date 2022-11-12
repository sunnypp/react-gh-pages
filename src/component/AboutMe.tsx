import { Trans, withTranslation } from "react-i18next"
import styled, { keyframes } from "styled-components"
import sunnyToastPhoto from '../asset/photo/sunny_toast.png'

const gradient = keyframes`
	0%   { background-position: 0%   50%; }
	50%  { background-position: 100% 50%; }
	100% { background-position: 0%   50%; }
`

const AboutMe = styled.div`
animation: ${gradient} 8s ease infinite;
background: ${props => props.theme.palette.aboutMe.background};
background-size: 500% 500%;
font-size: ${props => props.theme.size.font.content};
min-height: 55vh;
line-height: 1.5;
padding: ${props => props.theme.size.menu} ${props => props.theme.size.size3} ${props => props.theme.size.size3};
position: relative;
z-index: 2;
`

const Photo = styled.img`
position: absolute;
width: 45%;
top: -50px;
right: -20px;
transform: rotate(-10deg);
`

const Name = styled.span`
background: ${props => props.theme.palette.aboutMe.highlight};
font-family: ${props => props.theme.typography.handwriting};
font-size: ${props => props.theme.size.font.big};
font-weight: 900;
`

const Em = styled.span`
background: ${props => props.theme.palette.aboutMe.highlight};
font-size: ${props => props.theme.size.font.big};
`

const Greetings = styled.div`
position: relative;
z-index: 1;
`

const Hi = styled.span`
color: ${props => props.theme.palette.common.secondary};
font-family: ${props => props.theme.typography.handwriting};
font-size: ${props => props.theme.size.menu};
font-weight: 900;
line-height: 2.5;
`

const Component = ({ t }: { t: any }) => <AboutMe>
  <Photo src={sunnyToastPhoto}></Photo>
  <Greetings>
    <Trans i18nKey="aboutMe.greetings"><Hi id="aboutMe">hi! 👋🏻</Hi><br/>I'm <Name>Sunny Pun ☀️</Name>, a <Em>Passionate Programmer 🔥</Em> who also cares about <Em>Design 🎨 & Product 💁🏻‍♂️</Em>, for <Em>next generations 👦🏻🧒🏼👧🏾</Em>.</Trans>
  </Greetings>
</AboutMe>

export default withTranslation()(Component)
