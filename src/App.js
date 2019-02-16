import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html { overflow: hidden }
  body {
    position: relative;
    margin: 0;
    overflow: hidden;
  }

  * { box-sizing: content-box; }
`;

const Home = styled.section`
  width: 100%;
  height: 100vh;
  background: red;
`

const Modal = styled(
  props => {
    const Content = styled.section`
      border-radius: 20px;
      padding: 20px;
      background: rgba(255,255,255,.8);
    `;

    const Close = styled.a`
    `;

    const ProjectList = styled.div`
    `
    return (
      <Content className={props.className}>
        {props.title}
        <Close />
        <ProjectList projects={props.projects}/>
      </Content>
    );
  })`
  position: absolute;
  top: ${ props => props.xy[1] }%;
  left: ${ props => props.xy[0] }%;
  width: ${ props => props.wh[0] }%;
  height: ${ props => props.wh[1] }%;
  z-index: ${ props => props.z };
`;


const App = props => {
  const [ state, setState ] = useState('home');
  const side = [];
  const work = [];
  return (
    <>
      <GlobalStyle />
      <Home />
      <Modal title={'Side'} projects={side} xy={[50,90]} wh={[80,50]} z={100} />
      <Modal title={'Work'} projects={side} xy={[10,80]} wh={[80,50]} />
    {
      // <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24">
      // <path d="M23.955 13.587l-1.342-4.135-2.664-8.189c-.135-.423-.73-.423-.867 0L16.418 9.45H7.582L4.919 1.263C4.783.84 4.185.84 4.05 1.26L1.386 9.449.044 13.587c-.121.375.014.789.331 1.023L12 23.054l11.625-8.443c.318-.235.453-.647.33-1.024" />
      // </svg>
      // <svg
      // width="25"
      // xmlns="http://www.w3.org/2000/svg"
      // role="img"
      // viewBox="0 0 24 24"
      // >
      // <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.936v.014zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.35 1.617-.01.001zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.749 0h.002z" />
      // </svg>
    }
    </>
  );
};

export default App;
