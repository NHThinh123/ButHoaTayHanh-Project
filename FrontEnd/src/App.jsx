import Header from "./components/header";
import { Outlet } from "react-router-dom";

function App() {
  // useEffect(() => {
  //   const fetchHelloWorld = async () => {
  //     const res = await axios.get(`/api`);
  //     console.log("check res ", res);
  //   };
  //   fetchHelloWorld();
  // }, []);
  return (
    <div style={{ display: "flex" }}>
      <Header />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
