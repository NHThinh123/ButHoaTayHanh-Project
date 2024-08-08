import { useEffect } from "react";
import axios from "./util/axios.customize";
import Header from "./components/header";
import { Outlet } from "react-router-dom";

function App() {
  useEffect(() => {
    const fetchHelloWorld = async () => {
      const res = await axios.get(`/api/`);
      console.log("check res ", res);
    };
    fetchHelloWorld();
  }, []);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
