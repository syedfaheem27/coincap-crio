import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";
import { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../context/DataContext";
import { PageContext } from "../context/PageContext";
import { DATA_PER_PAGE } from "../utils/constants";
import { SearchContext } from "../context/SearchContext";

export default function CoinTable() {
  const { data, isLoading } = useContext(DataContext);
  const { pageNum, setPageNum } = useContext(PageContext);
  const { searchQuery } = useContext(SearchContext);

  const [filteredData, setFilteredData] = useState([]);
  let currPage = useRef(pageNum);
  currPage = searchQuery === "" ? pageNum : currPage;

  const filter = () => {
    let filtered_data = data;
    if (searchQuery !== "") {
      setPageNum(1);
      filtered_data = filtered_data.filter((data) =>
        data.id.startsWith(searchQuery.toLowerCase())
      );
    }

    filtered_data = filtered_data
      .map((data, idx) => {
        const dataNum = idx + 1;
        const start_idx = (pageNum - 1) * DATA_PER_PAGE;
        const end_idx = pageNum * DATA_PER_PAGE;

        if (dataNum <= start_idx || dataNum > end_idx) return 1;
        return data;
      })
      .filter((data) => data !== 1);

    return filtered_data;
  };
  useEffect(() => {
    const reqd_data = filter();
    setFilteredData(reqd_data);
    if (!searchQuery) setPageNum(currPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum, data, searchQuery, currPage]);

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
