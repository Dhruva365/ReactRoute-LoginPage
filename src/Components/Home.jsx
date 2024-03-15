import { useLocation } from "react-router-dom";

export default function Home() {
  const Location = useLocation();
  console.log(Location.state);
  return (
    <>
      <h1>This is Homepage</h1>
      <p>Welcome {Location.state.username}</p>
    </>
  );
}
