import styled from 'styled-components';

export default function Logo({ ...rest }) {
  return (
    <LogoContainer {...rest}>
      <LogoImage src="/logo.svg" alt="Casino Disputes" />
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 65px;
  width: auto;
`;
