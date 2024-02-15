import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: ${({ $widthLen }) => `${$widthLen + 5}ch`};
  border: 1px solid black;
  border-radius: 4px;
  background-color: inherit;
  &:focus {
    border: none;
    outline: none;
  }
`;

//Change the styling of it later

const DropDown = ({ options, className }) => {
  return (
    <Container className={className}>
      <Input
        list="currencies"
        name="currency"
        id="currency"
        placeholder={options[0]}
        defaultValue={options[0]}
        $widthLen={options[0].length}
      />
      <datalist id="currencies">
        {options.map((op, i) => {
          return <option value={op} key={`${op}-${i}`} />;
        })}
      </datalist>
    </Container>
  );
};

export default DropDown;
