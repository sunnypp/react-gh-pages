import { Trans, withTranslation } from "react-i18next"
import styled from "styled-components"
import { Em, Small, StickyTitle } from "./Title"
import CncIcon from '../asset/icon/cnc.svg'

const NonWork = styled.div`
background: ${props => props.theme.palette.nonWork.background};
font-size: ${props => props.theme.size.font.content};
line-height: 1.5;
padding: ${props => props.theme.size.menu} ${props => props.theme.size.size3} ${props => props.theme.size.size3};
position: relative;
`

const CncImage = styled.img`
float: left;
padding-right: ${props => props.theme.size.size3};
width: 50%;
`

const CncBlock = styled.div`
width: 100%;
`

const Component = ({ t }: { t: any }) => <NonWork>
  <CncBlock>
    <CncImage src={CncIcon} id="nonWork" />
    <Trans i18nKey="nonWork.cnc"><a href="https://www.youtube.com/channel/UCl-I9ammUpPqYOTgIIj33DA" target="_blank" rel="noreferrer">C'n'C</a> is a YouTube channel that I started with my Christian friends for translating English choral songs into Cantonese. It's an on-going project. 🎬</Trans>
  </CncBlock>
  <br/>
  {t("nonWork.music")}
  <br/>
  <br/>
  <Small>
    <Trans i18nKey="nonWork.startup">I've joined startup competitions and have a few startup attempts. Details to be added later or please ask me in person! It was probably too detailed <a href="https://web.archive.org/web/20201214161128/https://sunnypp.github.io/" target="_blank" rel="noreferrer">here (my old portfolio on Web Archive)</a></Trans>
  </Small>
  <StickyTitle><Em>Non-Work</Em></StickyTitle>
</NonWork>

export default withTranslation()(Component)
