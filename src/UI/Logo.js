import styled from "styled-components";

const LogoContainer = styled.div`
  width: 5rem;
  height: 2rem;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <StyledImg src="/coincap-logo.png" />
    </LogoContainer>
  );
};

export default Logo;
