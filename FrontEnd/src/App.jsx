import { useContext, useEffect } from "react";
import Sider from "./components/layouts/sider";
import { Outlet } from "react-router-dom";
import axios from "./util/axios.customize";
import { AuthContext } from "./components/context/auth.context";
import { Col, Layout, Row, Spin } from "antd";
import Header from "./components/layouts/header";

function App() {
  const { setAuth, loading, setLoading } = useContext(AuthContext);
  useEffect(() => {
    const fetchAccount = async () => {
      setLoading(true);
      const res = await axios.get(`/api/user/account`);
      if (res && !res.message) {
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
            transform: "translate(-50%, -50%)",
          }}
        >
          <Spin size="large" />
        </div>
      ) : (
        <Layout style={{}}>
          <Header />
          <Row style={{ marginTop: "80px" }}>
            <Col span={6}>
              <Sider />
            </Col>
            <Col span={18}>
              <div style={{ flex: 1, margin: "16px" }}>
                <Outlet />
              </div>
            </Col>
          </Row>
        </Layout>
      )}
    </div>
  );
}

export default App;
