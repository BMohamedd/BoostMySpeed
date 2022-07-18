import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MainContext from "./Context/mainContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MainContext>
    <App />
  </MainContext>
);
