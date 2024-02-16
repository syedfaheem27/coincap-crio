import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import { PageContext } from "../context/PageContext";
import { DATA_PER_PAGE } from "../utils/constants";

export default function CoinTable() {
  const { data, isLoading } = useContext(DataContext);
  const { pageNum } = useContext(PageContext);
  const [filteredData, setFilteredData] = useState([]);

  const filterPageDataHandle = () => {
    const data_filtered = data
      .map((data, idx) => {
        const dataNum = idx + 1;
        let startNum = (pageNum - 1) * DATA_PER_PAGE;
        let endNum = pageNum * DATA_PER_PAGE;

        if (dataNum < startNum || dataNum > endNum) return 1;
        return data;
      })
      .filter((data) => data !== 1);

    setFilteredData(data_filtered);

    return data_filtered;
  };

  useEffect(() => {
    if (isLoading) return;
    filterPageDataHandle();
  }, []);

  if (isLoading) return <p>Loading....</p>;

  return (
    <Box sx={{ width: "100%" }} className="coin-container">
      <Grid container className="coin-grid">
        <TableHeader />
        {filteredData.map((item) => {
          return <TableItem data={item} key={item.id} />;
        })}
      </Grid>
    </Box>
  );
}
