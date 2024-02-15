import Grid from "@mui/material/Grid";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const TableHeader = () => {
  const theme = useTheme();
  const matches_sm = useMediaQuery(theme.breakpoints.up("sm"));
  const matches_md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {matches_sm && (
        <Grid item xs={1}>
          <Item className="coin-item">Rank</Item>
        </Grid>
      )}
      <Grid item xs={matches_md ? 3 : 4}>
        <Item className="coin-item">Name</Item>
      </Grid>
      <Grid item xs={matches_md ? 1 : matches_sm ? 1 : 4}>
        <Item className="coin-item">Price</Item>
      </Grid>
      {matches_sm && (
        <Grid item xs={2}>
          <Item className="coin-item">Market Cap</Item>
        </Grid>
      )}

      {matches_md && (
        <>
          <Grid item xs={1}>
            <Item className="coin-item">VWAP(24Hr)</Item>
          </Grid>
          <Grid item xs={1}>
            <Item className="coin-item">Supply</Item>
          </Grid>
        </>
      )}

      {matches_sm && (
        <Grid item xs={matches_md ? 1 : 2}>
          <Item className="coin-item"> {matches_sm ? "Volume" : ""}(24Hr)</Item>
        </Grid>
      )}
      <Grid item xs={matches_md ? 2 : matches_sm ? 2 : 4}>
        <Item className="coin-item">Change(24Hr)</Item>
      </Grid>
    </>
  );
};

export default TableHeader;
