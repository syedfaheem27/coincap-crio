import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TableHeader from "./TableHeader";
import { Data } from "../utils/constants";
import TableItem from "./TableItem";

export default function CoinTable() {
  return (
    <Box sx={{ width: "100%" }} className="coin-container">
      <Grid container className="coin-grid">
        <TableHeader />
        {Data.map((data) => {
          return <TableItem data={data} key={data.id} />;
        })}
      </Grid>
    </Box>
  );
}
