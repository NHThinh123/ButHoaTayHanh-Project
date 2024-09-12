import { Col, Row } from "antd";
import Header from "../components/templates/header";
import Sider from "../components/templates/sider";
import CharacterDetail from "../features/characters/components/character-detail";

const TestPage = () => {
  return (
    <div>
      <Header />
      <Row>
        <Col span={6} style={{ marginTop: "80px" }}>
          <Sider />
        </Col>
        <Col span={18} style={{ marginTop: "80px" }}>
          <CharacterDetail />
        </Col>
      </Row>
    </div>
  );
};
export default TestPage;
