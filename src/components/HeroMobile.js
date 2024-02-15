import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";
import { MarketSnap } from "../utils/constants";

const AccordionUl = styled.ul`
  list-style-type: none;
  padding: 1rem;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const AccordionLi = styled.li`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  border: 1px solid green;
  padding: 0 0.5rem;
`;

const HeroMobile = () => {
  const theme = useTheme();
  return (
    <Accordion
      sx={{
        backgroundColor: "inherit",
        color: theme.palette.primary.main,
        border: "1px solid red",
        width: "100%",
        marginBottom: "4rem !important",
      }}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />
        }
        aria-controls="panel1-content"
        id="panel1-header"
      >
        Accordion 1
      </AccordionSummary>
      <AccordionDetails>
        <AccordionUl>
          {MarketSnap.map((item, idx) => {
            return (
              <AccordionLi key={`${idx}${item}`}>
                <div>{item} :</div>
                <div>%%PLACEHOLDER%%</div>
              </AccordionLi>
            );
          })}
        </AccordionUl>
      </AccordionDetails>
    </Accordion>
  );
};

export default HeroMobile;
