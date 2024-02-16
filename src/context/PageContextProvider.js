import React, { useState } from "react";
import { PageContext } from "./PageContext";

const PageContextProvider = ({ children }) => {
  const [pageNum, setPageNum] = useState(1);
  return (
    <PageContext.Provider value={{ pageNum, setPageNum }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
