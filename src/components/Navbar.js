import styled from "styled-components";
import Hamburger from "../UI/Hamburger";
import { useContext } from "react";
import { OpenContext } from "../context/openContext";
import SideNav from "./SideNav";
import Search from "../UI/Search";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid green;
  padding: 1rem;
`;

const LogoContainer = styled.div`
  width: 2.75rem;
  padding: 0.25rem;
  border: 1px solid red;
`;

const Navbar = () => {
  const { open } = useContext(OpenContext);
  return (
    <>
      <Nav>
        <Search />
        <LogoContainer>
          <img src="/coincap-logo.png" alt="Coin Cap logo" />
        </LogoContainer>
        <Hamburger />
      </Nav>
      {open && <SideNav />}
    </>
  );
};

export default Navbar;
