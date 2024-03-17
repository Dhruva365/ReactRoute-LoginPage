import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ValidateContext } from "../App";

export default function LoginPage() {
  const [obj, setObj] = useState({ name: "", pass: "" });
  const navigate = useNavigate();
  const { changePath, setChangePath } = useContext(ValidateContext);
  console.log(changePath);

  function onClickHandle() {
    if (obj.name === "Dhruv" && obj.pass === "123") {
      localStorage.setItem("name1", obj.name);
      setChangePath(true);
      navigate("/home");
    } else {
      alert("Incorrect Credential");
    }
  }
  return (
    <>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Enter your Username"
        value={obj.name}
        onChange={(e) => {
          setObj({ ...obj, name: e.target.value });
        }}
      />
      <br />
      <input
        type="password"
        placeholder="Enter your Password"
        value={obj.pass}
        onChange={(e) => {
          setObj({ ...obj, pass: e.target.value });
        }}
      />
      <br />
      <button onClick={onClickHandle}>Submit</button>
    </>
  );
}
