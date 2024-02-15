import styled from "styled-components";
import { MarketSnap } from "../utils/constants";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  border: 1px solid red;
  padding: 4rem 1rem;
  width: 100%;
  max-width: 1096px;
  margin: 0 auto;
  gap: 1rem;
`;

const HeroDektop = () => {
  return (
    <GridContainer>
      {MarketSnap.map((item, idx) => {
        return (
          <div
            key={`${idx}${item}`}
            style={{
              color: "white",
              border: "1px solid orange",
              display: "flex",
              flexDirection: "column",
              padding: "0.25rem",
            }}
          >
            <div>{item} :</div>
            <div>%%PLACEHOLDER%%</div>
          </div>
        );
      })}
    </GridContainer>
  );
};

export default HeroDektop;
