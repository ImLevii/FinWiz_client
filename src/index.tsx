import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById("root");

render(
  <StrictMode>
    <App />
  </StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
