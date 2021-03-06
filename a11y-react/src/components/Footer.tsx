import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #888;
  color: #333;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
const Copyright = styled.small``;

export const Footer: React.VFC = () => {
  return <FooterWrapper>
    <Copyright>&copy;tminasen</Copyright>
  </FooterWrapper>;
};
