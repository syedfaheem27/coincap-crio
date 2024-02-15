import Grid from "@mui/material/Grid";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import numeral from "numeral";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const TableItem = ({ data }) => {
  const theme = useTheme();
  const matches_sm = useMediaQuery(theme.breakpoints.up("sm"));
  const matches_md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {matches_sm && (
        <Grid item xs={1}>
          <Item className="coin-item">{data.rank}</Item>
        </Grid>
      )}
      <Grid item xs={matches_md ? 3 : 4}>
        <Item className="coin-item">{data.name}</Item>
      </Grid>
      <Grid item xs={matches_md ? 1 : matches_sm ? 1 : 4}>
        <Item className="coin-item">
          ${numeral(data.priceUsd).format("0,0.0")}
        </Item>
      </Grid>
      {matches_sm && (
        <Grid item xs={2}>
          <Item className="coin-item">
            {numeral(data.marketCapUsd).format("$0.00a")}
          </Item>
        </Grid>
      )}

      {matches_md && (
        <>
          <Grid item xs={1}>
            <Item className="coin-item">
              {numeral(data.vwap24Hr).format("0,0.0")}
            </Item>
          </Grid>
          <Grid item xs={1}>
            <Item className="coin-item">
              {numeral(data.supply).format("0.00a")}
            </Item>
          </Grid>
        </>
      )}
      {matches_sm && (
        <Grid item xs={matches_md ? 1 : 2}>
          <Item className="coin-item">
            {numeral(data.volumeUsd24Hr).format("0.00a")}
          </Item>
        </Grid>
      )}
      <Grid item xs={matches_md ? 2 : matches_sm ? 2 : 4}>
        <Item className="coin-item">
          {data.changePercent24Hr > 0 ? "+" : "-"}
          {numeral(data.changePercent24Hr).format("0.0%")}
        </Item>
      </Grid>
    </>
  );
};

export default TableItem;
