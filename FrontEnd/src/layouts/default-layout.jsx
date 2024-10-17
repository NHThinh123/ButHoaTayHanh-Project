import { Col, Layout, Row } from "antd";
import Header from "../components/templates/header";
import Sider from "../components/templates/sider";

const DefaultLayout = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Row style={{ marginTop: "80px" }}>
        <Col span={6}>
          <Sider />
        </Col>
        <Col span={18}>
          <div style={{ flex: 1 }}>{children}</div>
        </Col>
      </Row>
    </Layout>
  );
};

export default DefaultLayout;
{
  /* <div
style={{
  position: "fixed",
  scrollbarWidth: "none",
  height: "100vh",
  paddingBottom: 100,
  overflow: "auto",
}}
> */
}
