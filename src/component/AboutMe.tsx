import { Trans, withTranslation } from "react-i18next"
import styled, { keyframes } from "styled-components"
import sunnyToastPhoto from '../asset/photo/sunny_toast.png'
import { Em } from "./Title"

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

${props => props.theme.breakpoints.largerThanPhone} {
  font-size: ${props => props.theme.size.font.big};
}

${props => props.theme.breakpoints.largerThanTablet} {
  text-align: center;
}
`

const Photo = styled.img`
filter: drop-shadow(-6px -6px 1px #fff);
position: absolute;
right: 0;
top: -100px;
max-width: 300px;
width: 45%;
`

const Name = styled.span`
background: ${props => props.theme.palette.aboutMe.highlight};
font-family: ${props => props.theme.typography.handwriting};
font-size: ${props => props.theme.size.font.big};
font-weight: 900;

${props => props.theme.breakpoints.largerThanPhone} {
  font-size: ${props => props.theme.size.font.bigger};
}
`

const Greetings = styled.div`
margin-bottom: ${props => props.theme.size.menu};
position: relative;
z-index: 1;
`

const Hi = styled.span`
color: ${props => props.theme.palette.aboutMe.hi};
font-family: ${props => props.theme.typography.handwriting};
font-size: ${props => props.theme.size.menu};
font-weight: 900;
line-height: 2.5;
text-shadow: -3px -3px 0 #fff, 3px -3px 0 #fff, -3px 3px 0 #fff, 3px 3px 0 #fff;

${props => props.theme.breakpoints.largerThanPhone} {
  font-size: ${props => props.theme.size.font.impact};
  text-shadow: -5px -5px 0 #fff, 5px -5px 0 #fff, -5px 5px 0 #fff, 5px 5px 0 #fff;
}
`

const Big = styled(Em)`
font-size: ${props => props.theme.size.font.big};
`

const Component = ({ t }: { t: any }) => <AboutMe>
  <Photo src={sunnyToastPhoto}></Photo>
  <Greetings>
    <Trans i18nKey="aboutMe.greetings"><Hi id="aboutMe">hi! 👋🏻</Hi><br/>I'm <Name>Sunny Pun ☀️</Name>, a <Big>Passionate Programmer 🔥</Big> who also cares about <Big>Design 🎨 & Product 💁🏻‍♂️</Big>, for <Big>next generations 👦🏻🧒🏼👧🏾</Big>.</Trans>
  </Greetings>
</AboutMe>

export default withTranslation()(Component)
