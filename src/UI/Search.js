import styled from "styled-components";
import SearchIcon from "../assets/search.svg";
import { useState } from "react";

const SearchContainer = styled.div`
  width: 1.5rem;
  padding: 0.15rem;
  border: 1px solid green;
  cursor: pointer;
  display: flex;
`;

const StyledInp = styled.input`
  border: 1px solid green;
  max-width: 8rem;
  padding: 0 1rem;
  &:focus {
    outline: none;
  }
`;
const StyledImg = styled.img``;
const Search = () => {
  const [openInp, setOpenInp] = useState(false);
  return (
    <SearchContainer>
      {openInp && <StyledInp type="text" />}
      <StyledImg
        src={SearchIcon}
        alt="search-icon"
        onClick={() => setOpenInp((o) => !o)}
      />
    </SearchContainer>
  );
};

export default Search;
