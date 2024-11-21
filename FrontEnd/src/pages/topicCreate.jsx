import { Col, Row } from "antd";
import BentoBox from "../components/atoms/bento-box";

const TopicCreatePage = () => {
  return (
    <Row style={{ display: "flex", justifyContent: "center" }}>
      <Col span={16}>
        <BentoBox padding={28} style={{ margin: "0px 8px" }}>
          a
        </BentoBox>
      </Col>
    </Row>
  );
};

export default TopicCreatePage;
