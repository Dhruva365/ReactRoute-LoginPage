import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../App";

export default function Home() {
  const value = useContext(ThemeContext);
  return (
    <>
      <h1>This is Homepage</h1>
      <p>Welcome {value.name1}</p>
    </>
  );
}
