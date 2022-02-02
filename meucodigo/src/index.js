import React from "react";
import ReactDOM from "react-dom";
import { Component } from "./Component/index";
import { Component2 } from "./Component2/index";

const header = "Hola mundo 0.1";
const img = "https://images7.alphacoders.com/671/thumb-1920-671281.jpg";

ReactDOM.render(
  <React.StrictMode>
    <Component2 text="hola mundo para todos" />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
