import { Trans, withTranslation } from "react-i18next"
import styled from "styled-components"
import { Em, Small, StickyTitle, Subtitle } from "./Title"
import CncIcon from '../asset/icon/cnc.svg'
import { DesktopContainer } from "./DesktopContainer"

const Passion = styled.div`
background: ${props => props.theme.palette.passion.background};
font-size: ${props => props.theme.size.font.content};
line-height: 1.5;
padding: ${props => props.theme.size.menu} ${props => props.theme.size.size3} ${props => props.theme.size.size3};
position: relative;

${props => props.theme.breakpoints.largerThanTablet} {
  font-size: ${props => props.theme.size.font.desktop};
}
`

const CncImage = styled.img`
float: left;
padding-right: ${props => props.theme.size.size3};
width: 50%;

${props => props.theme.breakpoints.largerThanTablet} {
  width: 33%;
}
`

const CncBlock = styled.div`
width: 100%;
`

const Component = ({ t }: { t: any }) => <Passion>
  <DesktopContainer>
    <CncBlock>
      <CncImage src={CncIcon} />
      <Trans i18nKey="passion.cnc"><a href="https://www.youtube.com/channel/UCl-I9ammUpPqYOTgIIj33DA" target="_blank" rel="noreferrer">C'n'C</a> is a YouTube channel that I started with my Christian friends for translating English choral songs into Cantonese. It's an on-going project. 🎬</Trans>
    </CncBlock>
    <br/>
    {t("passion.music")}
    <br/>
    <br/>
    <div>
      <Small>
        <Trans i18nKey="passion.startup">I've joined startup competitions and have a few startup attempts. Details to be added later or please ask me in person! It was probably too detailed <a href="https://web.archive.org/web/20201214161128/https://sunnypp.github.io/" target="_blank" rel="noreferrer">here (my old portfolio on Web Archive)</a></Trans>
      </Small>
    </div>
    <br/>
    <Subtitle>{t("passion.knowledge.title")}</Subtitle>
    <Trans i18nKey="passion.knowledge.description">There is an urge inside me to care about how knowledge can be passed into future generations, after I have watched this amazing talk which outlined some of the lost technologies in human history: <a href="https://youtu.be/pW-SOdj4Kkk" target="_blank" rel="noreferrer">Preventing the Collapse of Civilisations by Jonathan Blow</a><br/><br/>Along the same path, I investigated about <a href="https://zettelkasten.de/posts/overview/" target="_blank" rel="noreferrer">Zettelkasten</a> and other ways of organizing knowledge (e.g. <a href="https://en.wikipedia.org/wiki/Personal_knowledge_management" target="_blank" rel="noreferrer">Personal Knowledge Management</a> to start with). I was using <a href="http://vimwiki.github.io" target="_blank" rel="noreferrer">vim-wiki</a> before I use any outliners (e.g. Workflowy, Dynalist, Logseq). The idea of everything being connected as a graph is also interesting to me: <a href="https://alexanderobenauer.com/labnotes/014/" target="_blank" rel="noreferrer">GraphOS</a></Trans>
    <br/>
    <br/>
    <Subtitle id="passion">{t("passion.sync.title")}</Subtitle>
    <Trans i18nKey="passion.sync.description">Offline-first: I am heavily intrigued by the mathematical beauty of <a href="https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type" target="_blank" rel="noreferrer">Conflict-free Replicated Data Type</a> (CRDT). Imagine a world where people can collaborate while they are offline (and sync later) and data modification requires no one to wait for server response.<br/><br/>Real-time: I enjoy making music with others online using <a href="https://jamalus.io/" target="_blank" rel="noreferrer">Jamulus</a>. Once I tried jamming with people from Guangdong, Malaysia, Taiwan, Thailand at the same time. I hope this technology to be promoted and adapted in other sync-related application, like conference calls, VR / AR.</Trans>
  </DesktopContainer>
  <StickyTitle><Em>{t("passion.title")}</Em></StickyTitle>
</Passion>

export default withTranslation()(Component)
