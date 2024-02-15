import styled from "styled-components";

const LogoContainer = styled.div`
  width: 4.25rem;
  height: 2rem;
  margin-right: 0.25rem !important;
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
