import styled from "styled-components";
import {
  MarketSnap,
  getExchangeVolume,
  getTotalMarketCap,
} from "../utils/constants";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  padding: 4rem 1rem;
  width: 100%;
  max-width: 1096px;
  margin: 0 auto;
  gap: 1rem;
`;

const HeroDektop = () => {
  const { data } = useContext(DataContext);

  let marketOverview = MarketSnap.map((m) => {
    if (m.startsWith("Market Cap")) return `${m}+${getTotalMarketCap(data)}`;
    if (m.startsWith("Exchange Vol")) return `${m}+${getExchangeVolume(data)}`;
    if (m.startsWith("BTC")) return `${m}+52.1%`;

    return `${m}+ 256`;
  });

  return (
    <GridContainer>
      {marketOverview.map((item, idx) => {
        const [identifier, val] = item.split("+");
        let num;
        if (identifier === "Market Cap") num = `$ ${Number(val).toFixed(2)} t`;
        else if (identifier === "Exchange Vol")
          num = `${Number(val).toFixed(2)} b`;
        else num = val;

        return (
          <div
            key={`${idx}${item}`}
            style={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              padding: "0.25rem",
            }}
          >
            <div>{identifier} :</div>
            <div>{num}</div>
          </div>
        );
      })}
      {MarketSnap.map((item, idx) => {})}
    </GridContainer>
  );
};

export default HeroDektop;
