import React, { useState } from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

import styled from "styled-components";
import SettingsIcon from "@mui/icons-material/Settings";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchInput = styled.input`
  padding: 0.25rem;
  border: ${({ $expanded }) =>
    $expanded === "true" ? "1px solid black" : "none"};
  background-color: inherit;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  width: ${({ $expanded }) => ($expanded === "true" ? "8rem" : "2.5rem")};
`;

const SearchIconDiv = styled.div`
  cursor: pointer;
  padding: 8px;
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
//Change the styling on the search component
//TODO: Add functioanlity to the settings icon
const SearchComponent = ({ matches }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleSearch = () => {
    setExpanded(!isExpanded);
  };

  // useEffect(() => {
  //   const closeSearch = () => setExpanded(false);
  //   document.addEventListener("click", closeSearch, false);

  //   return () => document.removeEventListener("click", closeSearch);
  // }, []);

  return (
    <>
      <SearchContainer>
        <SearchInput
          $expanded={isExpanded.toString()}
          placeholder={isExpanded ? "Search..." : ""}
        />
        <SearchIconDiv onClick={toggleSearch}>
          <SearchIcon />
        </SearchIconDiv>
      </SearchContainer>
      {!isExpanded && matches && (
        <Button
          startIcon={<SettingsIcon />}
          sx={{
            color: "black",
            margin: "0",
            pl: "0",
            pr: "0",
            border: "1px solid red",
          }}
        />
      )}
    </>
  );
};

export default SearchComponent;
