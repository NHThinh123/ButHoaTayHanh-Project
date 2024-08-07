import { useEffect } from "react";
import axios from "./util/axios.customize";

function App() {
  useEffect(() => {
    const fetchHelloWorld = async () => {
      const res = await axios.get(`/api/`);
      console.log("check res ", res);
    };
    fetchHelloWorld();
  }, []);
  return <>đây là trang react</>;
}

export default App;
