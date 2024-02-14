import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/globalStyles";
import OpenContextProvider from "./context/OpenContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <OpenContextProvider>
      <GlobalStyle />
      <App />
    </OpenContextProvider>
  </React.StrictMode>
);
