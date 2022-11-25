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
height: 80vh;
line-height: 1.5;
padding: 0 ${props => props.theme.size.size3} ${props => props.theme.size.size3};
position: relative;
z-index: 2;

${props => props.theme.breakpoints.largerThanSE} {
  height: 60vh;
}

${props => props.theme.breakpoints.largerThanPhone} {
  font-size: ${props => props.theme.size.font.big};
  /* includes landscape phone screen which the scroll up hint should be visible */
  height: unset;
}

${props => props.theme.breakpoints.largerThanTablet} {
  text-align: center;
  height: 75vh;
}
`

const Photo = styled.img`
filter: drop-shadow(-6px -6px 1px #fff);
position: absolute;
right: 0;
top: -100px;
max-width: 300px;
width: 45%;

${props => props.theme.breakpoints.largerThanPhone} {
  width: 35%;
}

${props => props.theme.breakpoints.largerThanTablet} {
  width: 30%;
}
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
position: relative;
z-index: 1;

${props => props.theme.breakpoints.largerThanPhone} {
  padding-bottom: ${props => props.theme.size.menu};
}

${props => props.theme.breakpoints.largerThanTablet} {
  top: 50%;
  transform: translateY(-50%);
}
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

interface LanguageButtonProps {
  selected: boolean
}

const LanguageButton = styled.button<LanguageButtonProps>`
background: ${props => props.selected ? props.theme.palette.aboutMe.hi : props.theme.palette.common.bright};
border: ${props => props.selected ? props.theme.size.size1 : 0};
border-color: ${props => props.theme.palette.aboutMe.highlight};
border-radius: 9999px;
border-style: solid;
color: ${props => props.selected ? props.theme.palette.aboutMe.highlight : "#000"};
font-size: ${props => props.theme.size.font.content};
font-weight: ${props => props.selected ? 800 : 400};
margin: ${props => props.theme.size.size3};
padding: ${props => props.theme.size.size3};
`

const Big = styled(Em)`
font-size: ${props => props.theme.size.font.big};
`

const Component = ({ i18n }: { i18n: any }) => <AboutMe>
  <Photo src={sunnyToastPhoto}></Photo>
  <Greetings>
    <Trans i18nKey="aboutMe.greetings"><Hi>hi! 👋🏻</Hi><br/>I'm <Name id="aboutMe">Sunny Pun ☀️</Name>, a <Big>Passionate Programmer 🔥</Big> who also cares about <Big>Design 🎨 & Product 💁🏻‍♂️</Big>, for <Big>next generations 👦🏻🧒🏼👧🏾</Big>.</Trans>
    <br/>
    <br/>
    <LanguageButton selected={i18n.language === "en"} onClick={() => i18n.changeLanguage("en")}>EN</LanguageButton>
    <LanguageButton selected={i18n.language === "zh-CN"} onClick={() => i18n.changeLanguage("zh-CN")}>简</LanguageButton>
    <LanguageButton selected={i18n.language === "zh-TW"} onClick={() => i18n.changeLanguage("zh-TW")}>繁</LanguageButton>
  </Greetings>
</AboutMe>

export default withTranslation()(Component)
