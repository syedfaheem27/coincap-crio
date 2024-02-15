import React, { useEffect, useState } from "react";
import { DataContext } from "./DataContext";
import axios from "axios";

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get("https://api.coincap.io/v2/assets");
      setData(data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <DataContext.Provider
      value={{
        data,
        isLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
