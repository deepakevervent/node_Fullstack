import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "animate.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./Pages/Desktop/Common/Login/Login";
import Home from "./Pages/Desktop/Employee/Home/Home";
import HomeEmployer from "./Pages/Desktop/Employer/HomeEmployer/HomeEmployer";
import HomeBroker from "./Pages/Desktop/Broker/HomeBroker/HomeBroker";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
