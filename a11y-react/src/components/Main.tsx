import React from 'react';
import styled from 'styled-components';
import { Image } from './Image';
import LargeImage from '../assets/large.png';

const MainWrapper = styled.main``
const Article = styled.article``;
const Title = styled.h1``;
const Paragraph = styled.p``;

export const Main: React.VFC = () => {

  return <MainWrapper>
    <Article>
      <Title>2021/07/06の日記</Title>
      <Paragraph>{'あいうえお'.repeat(100)}</Paragraph>
      <Paragraph>{'かきくけこ'.repeat(100)}</Paragraph>
      <Paragraph>{'さしすせそ'.repeat(100)}</Paragraph>
      <Image url={LargeImage} />
    </Article>
  </MainWrapper>;
};
