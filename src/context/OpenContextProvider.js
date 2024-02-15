import React, { useState } from "react";
import { OpenContext } from "./OpenContext";

const OpenContextProvider = ({ children }) => {
  const [opens, setOpens] = useState(false);
  return (
    <OpenContext.Provider value={{ opens, setOpens }}>
      {children}
    </OpenContext.Provider>
  );
};

export default OpenContextProvider;
