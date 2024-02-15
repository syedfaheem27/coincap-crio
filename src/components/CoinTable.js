import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function CoinTable() {
  const { data, isLoading } = useContext(DataContext);

  if (isLoading) return <p>Loading....</p>;

  return (
    <Box sx={{ width: "100%" }} className="coin-container">
      <Grid container className="coin-grid">
        <TableHeader />
        {data.map((item) => {
          return <TableItem data={item} key={item.id} />;
        })}
      </Grid>
    </Box>
  );
}
