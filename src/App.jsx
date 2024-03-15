// import './App.css'

import Home from "./Components/Home";
import LoginPage from "./Components/LoginPage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
