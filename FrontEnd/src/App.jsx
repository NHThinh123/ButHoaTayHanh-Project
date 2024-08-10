import { useContext, useEffect } from "react";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import axios from "./util/axios.customize";
import { AuthContext } from "./components/context/auth.context";
import { Spin } from "antd";

function App() {
  const { setAuth, loading, setLoading } = useContext(AuthContext);
  useEffect(() => {
    const fetchAccount = async () => {
      setLoading(true);
      const res = await axios.get(`/api/account`);
      if (res) {
        setAuth({
          isAuthentication: true,
          user: {
            email: res.email,
            role: res.name,
          },
        });
      }
      setLoading(false);
    };
    fetchAccount();
  }, []);
  return (
    <div>
      {loading === true ? (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Spin size="large" />
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          <Header />
          <div style={{ flex: 1 }}>
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
