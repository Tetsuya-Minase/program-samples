import React from 'react';
import styled from 'styled-components';
import { Image } from './Image';
import LargeImage from '../assets/large.png';

const MainWrapper = styled.main``
const Article = styled.article``;
const Title = styled.h1`
  text-align: center;
  color: #333;
`;
const Paragraph = styled.p``;
const Link = styled.a``;

export const Main: React.VFC = () => {

  return <MainWrapper>
    <Article>
      <Title>2021/07/06の日記</Title>
      <Paragraph>{'あいうえお'.repeat(100)}</Paragraph>
      <Paragraph>
        普段天気予報は<Link href="https://weather.yahoo.co.jp/weather/" target="_blank">ヤフー天気</Link>か<Link href="https://www.jma.go.jp/bosai/forecast/" target="_blank">気象庁の天気予報</Link>を見ています。
        {/* <a href="https://yahoo.co.jp"/> */}
      </Paragraph>
      <Paragraph>{'かきくけこ'.repeat(100)}</Paragraph>
      <Paragraph>{'さしすせそ'.repeat(100)}</Paragraph>
      <Image url={LargeImage} />
    </Article>
  </MainWrapper>;
};
