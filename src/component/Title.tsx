import styled from "styled-components";

const Em = styled.span`
background: ${props => props.theme.palette.aboutMe.highlight};
`

const Title = styled.div`
font-family: ${props => props.theme.typography.handwriting};
font-size: ${props => props.theme.size.size6};
margin: ${props => props.theme.size.size4} 0;
font-weight: 600;

${props => props.theme.breakpoints.largerThanTablet} {
  font-size: ${props => props.theme.size.menu};
}
`

const StickyTitle = styled(Title)`
bottom: calc(${props => props.theme.size.menu} + ${props => props.theme.size.size3});
display: inline-block;
position: sticky;
`

const Subtitle = styled.div`
font-size: ${props => props.theme.size.font.big};
font-weight: 600;

${props => props.theme.breakpoints.largerThanTablet} {
  font-size: ${props => props.theme.size.font.bigger};
}
`

const Small = styled.span`
font-size: ${props => props.theme.size.font.small};
line-height: 0.5;

${props => props.theme.breakpoints.largerThanTablet} {
  font-size: ${props => props.theme.size.font.content};
}
`

export { Em, Title, StickyTitle, Subtitle, Small }
