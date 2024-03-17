// import './App.css'

import React, { createContext, useState } from "react";
import Home from "./Components/Home";
import LoginPage from "./Components/LoginPage";
import { Routes, Route } from "react-router-dom";

export const ValidateContext = createContext();
function App() {
  const [changePath, setChangePath] = useState(false);
  return (
    <>
      <ValidateContext.Provider value={{ changePath, setChangePath }}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </ValidateContext.Provider>
    </>
  );
}

export default App;
