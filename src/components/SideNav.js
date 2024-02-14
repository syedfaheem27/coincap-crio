import styled from "styled-components";
import DropDown from "../UI/DropDown";

const Container = styled.div`
  position: absolute;
  width: 12rem;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 0.5em;
  border: 1px solid red;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  @media (min-width: 767px) {
    display: none;
  }
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  margin-top: 2em;
  padding: 0.5em;
  border: 1px solid red;
  align-items: center;
`;

const StyledButton = styled.button`
  padding: 0.5em 0.75em;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  background-color: cyan;
`;

const SideNav = () => {
  return (
    <Container>
      <StyledUl>
        <li>Coins</li>
        <li>Exchanges</li>
        <li>Swap</li>
        <li>API</li>
        <li>Settings</li>
        <StyledButton>Connect Wallet</StyledButton>
      </StyledUl>
      <div></div>
      <DropDown
        list="currencies"
        name="currency"
        id="currency"
        defaultValue="USD"
        options={["USD", "INR", "ZMW", "ZEC", "ZWL"]}
      />
      <DropDown
        list="languages"
        name="language"
        id="language"
        defaultValue="English"
        options={["English", "Urdu", "Hindi", "Dansk", "Espanol"]}
      />
    </Container>
  );
};

export default SideNav;
