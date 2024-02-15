import React, { useState } from "react";
import { DataContext } from "./DataContext";

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return <DataContext.Provider>{children}</DataContext.Provider>;
};

export default DataContextProvider;
