import { useContext } from "react";
import styled from "styled-components";
import { OpenContext } from "../context/OpenContext";

const HamContainer = styled.div`
  position: relative;
  width: 1.25rem;
  height: 1rem;
  cursor: pointer;
`;

const HamItemTop = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: inline-block;
  height: 0.2rem;
  background-color: black;
  transform: ${(props) =>
    props.open ? "rotate(45deg) translateY(4px) translateX(4px)" : ""};
  transition: all 0.3s;
`;

const HamItemMid = styled.span`
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  transform: translateY(-50%);
  height: 0.2rem;
  background-color: black;
  display: ${(props) => (props.open ? "none" : "inline-block")};
  transition: all 0.3s;
`;

const HamItemBottom = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  display: inline-block;
  height: 0.2rem;
  background-color: black;
  transform: ${(props) =>
    props.open ? "rotate(-45deg) translateY(-4px) translateX(4px)" : ""};
  transition: all 0.3s;
`;

const Hamburger = ({ onClick }) => {
  const { opens, setOpens } = useContext(OpenContext);
  return (
    <HamContainer onClick={() => setOpens((prev) => !prev)}>
      <HamItemTop open={opens} />
      <HamItemMid open={opens} />
      <HamItemBottom open={opens} />
    </HamContainer>
  );
};

export default Hamburger;
