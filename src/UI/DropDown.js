import styled from "styled-components";

const StyledInp = styled.input`
  width: 60%;
  border: none;
  padding: 0.2em;
  &:focus {
    border: none;
    outline: none;
  }
`;

const DropDown = ({ list, name, id, defaultValue, options }) => {
  return (
    <>
      <StyledInp
        list={list}
        name={name}
        id={id}
        defaultValue={defaultValue}
        placeholder={defaultValue}
      />

      <datalist id={list}>
        {options.map((el, i) => (
          <option value={el} key={i + el} />
        ))}
      </datalist>
    </>
  );
};

export default DropDown;
