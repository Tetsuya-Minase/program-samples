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
export const Image: React.VFC<Props> = ({url}) => {
  return <Wrapper>
    <StyledImage src={url} />
  </Wrapper>;
};
