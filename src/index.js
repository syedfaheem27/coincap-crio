import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import OpenContextProvider from "./context/OpenContextProvider";
import DataContextProvider from "./context/DataContextProvider";
import PageContextProvider from "./context/PageContextProvider";
import SearchContextProvider from "./context/SearchContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataContextProvider>
      <SearchContextProvider>
        <PageContextProvider>
          <OpenContextProvider>
            <App />
          </OpenContextProvider>
        </PageContextProvider>
      </SearchContextProvider>
    </DataContextProvider>
  </React.StrictMode>
);
