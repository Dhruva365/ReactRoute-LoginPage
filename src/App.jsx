// import './App.css'

import React, { useState } from "react";
import Home from "./Components/Home";
import LoginPage from "./Components/LoginPage";
import { Routes, Route } from "react-router-dom";

export const ThemeContext = React.createContext();
function App() {
  const [object, setObject] = useState({ name1: "", pass1: "" });
  function getData(obj) {
    console.log(obj.name);
    setObject({ ...object, name1: obj.name, pass1: obj.pass });
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage onClick={getData} />} />
        <Route
          path="/home"
          element={
            <ThemeContext.Provider value={object}>
              <Home />
            </ThemeContext.Provider>
          }
        />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
