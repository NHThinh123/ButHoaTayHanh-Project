import { Col, Row } from "antd";
import Topic from "../features/topic/components/molecules/topic";

const App = () => {
  return (
    <Row>
      <Col span={6}></Col>
      <Col span={12}>
        <Topic></Topic>
      </Col>
      <Col span={6}></Col>
    </Row>
  );
};
export default App;
