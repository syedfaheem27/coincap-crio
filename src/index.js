import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import OpenContextProvider from "./context/OpenContextProvider";
import DataContextProvider from "./context/DataContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataContextProvider>
      <OpenContextProvider>
        <App />
      </OpenContextProvider>
    </DataContextProvider>
  </React.StrictMode>
);
