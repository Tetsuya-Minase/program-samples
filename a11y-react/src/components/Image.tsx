import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledImage = styled.img`
  width: 200px;
  height: 200px;
`;


interface Props {
  url: string;
}
export const Image = ({ url }: Props): JSX.Element => {
  return <Wrapper>
    <img src={url} />
    <StyledImage src={url} />
  </Wrapper>;
};
