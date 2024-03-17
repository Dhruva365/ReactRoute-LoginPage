import { useNavigate } from "react-router-dom";
import { ValidateContext } from "../App";
import { useContext, useEffect } from "react";

export default function Home() {
  const { changePath, setChangePath } = useContext(ValidateContext);
  const navigate = useNavigate();
  console.log(changePath);
  function clickHandle() {
    navigate("/");
  }
  useEffect(() => {
    if (changePath === false) {
      navigate("/");
    }
  }, [changePath]);

  return (
    <>
      {changePath ? (
        <div>
          <h1>This is Homepage</h1>
          <p>Welcome {localStorage.getItem("name1")}</p>
          <button onClick={clickHandle}>Logout</button>
        </div>
      ) : null}
    </>
  );
}
