import React, { useState } from "react";
import { OpenContext } from "./openContext";

const OpenContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <OpenContext.Provider value={{ open, setOpen }}>
      {children}
    </OpenContext.Provider>
  );
};

export default OpenContextProvider;
