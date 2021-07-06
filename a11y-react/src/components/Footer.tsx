import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer``
const Copyright = styled.small``;

export const Footer: React.VFC = () => {
  return <FooterWrapper>
    <Copyright>&copy;tminasen</Copyright>
  </FooterWrapper>;
};
