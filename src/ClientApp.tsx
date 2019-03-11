import React from "react";
import { hydrate } from "react-dom";
import App from "./App";
import "./main.css";

hydrate(<App />, document.getElementById("root"));
