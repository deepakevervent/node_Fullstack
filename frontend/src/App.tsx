import React, {useEffect} from "react";

import Home from "./Pages/Desktop/Employee/Home/Home";
import HomeEmployer from "./Pages/Desktop/Employer/HomeEmployer/HomeEmployer";
import HomeBroker from "./Pages/Desktop/Broker/HomeBroker/HomeBroker";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Desktop/Common/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/homeemployer" element={<HomeEmployer />} />
        <Route path="/homebroker" element={<HomeBroker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
