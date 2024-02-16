import styled from "styled-components";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { useContext } from "react";
import { PageContext } from "../context/PageContext";
import { DataContext } from "../context/DataContext";
import { DATA_PER_PAGE } from "../utils/constants";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #d1d5db;
  margin-top: -5rem !important;
  padding: 3rem 2rem;
  gap: 1rem;
`;

const Button = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;
const Footer = () => {
  const { pageNum, setPageNum } = useContext(PageContext);
  const { data } = useContext(DataContext);

  const totalPages = data.length / DATA_PER_PAGE;
  return (
    <StyledFooter>
      <Button disabled={pageNum === 1} onClick={() => setPageNum((p) => p - 1)}>
        <ArrowLeftIcon />
      </Button>
      <Button
        disabled={pageNum === totalPages}
        onClick={() => setPageNum((p) => p + 1)}
      >
        <ArrowRightIcon />
      </Button>
    </StyledFooter>
  );
};

export default Footer;
