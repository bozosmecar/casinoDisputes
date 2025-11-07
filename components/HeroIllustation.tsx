import styled from 'styled-components';

export default function HeroIllustration() {
  return <Img src="/justice.png" alt="Hero illustration" />;
}

const Img = styled.img`
  max-width: 45rem;
  width: 100%;
  height: auto;
  display: block;
`;
