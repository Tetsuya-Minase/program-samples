import React from 'react';
import styled from 'styled-components';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
const Wrapper = styled.body``;

const App: React.VFC = () => {
  return <Wrapper>
    <Header/>
    <Main/>
    <Footer/>
  </Wrapper>;
};

export default App;