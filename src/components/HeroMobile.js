import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";
import {
  MarketSnap,
  getExchangeVolume,
  getTotalMarketCap,
} from "../utils/constants";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const AccordionUl = styled.ul`
  list-style-type: none;
  padding: 1rem;
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
  padding: 0 0.5rem;
`;

const HeroMobile = () => {
  const theme = useTheme();
  const { data } = useContext(DataContext);

  let marketOverview = MarketSnap.map((m) => {
    if (m.startsWith("Market Cap")) return `${m}+${getTotalMarketCap(data)}`;
    if (m.startsWith("Exchange Vol")) return `${m}+${getExchangeVolume(data)}`;
    if (m.startsWith("BTC")) return `${m}+52.1%`;

    return `${m}+ 256`;
  });

  return (
    <Accordion
      sx={{
        backgroundColor: "inherit",
        color: theme.palette.primary.main,
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
        Market Snapshot
      </AccordionSummary>
      <AccordionDetails>
        <AccordionUl>
          {marketOverview.map((item, idx) => {
            const [identifier, val] = item.split("+");
            let num;
            if (identifier === "Market Cap")
              num = `$ ${Number(val).toFixed(2)} t`;
            else if (identifier === "Exchange Vol")
              num = `${Number(val).toFixed(2)} b`;
            else num = val;

            return (
              <AccordionLi key={`${idx}${item}`}>
                <div>{identifier} :</div>
                <div>{num}</div>
              </AccordionLi>
            );
          })}
        </AccordionUl>
      </AccordionDetails>
    </Accordion>
  );
};

export default HeroMobile;
