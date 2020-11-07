import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./components/TodoApp";
import "./scss/tailwind.css";
import "./scss/index.scss";

const appRoot = document.getElementById("root");

ReactDOM.render(<TodoApp />, appRoot);
