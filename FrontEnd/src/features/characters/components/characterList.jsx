import { Col, Row } from "antd";
import CharacterCard from "./characterCard";
const CharacterList = () => {
  return (
    <div>
      <Row gutter={[5, 5]} wrap>
        <Col span={6}>
          <CharacterCard />
        </Col>
        <Col span={6}>
          <CharacterCard />
        </Col>
        <Col span={6}>
          <CharacterCard />
        </Col>
        <Col span={6}>
          <CharacterCard />
        </Col>
        <Col span={6}>
          <CharacterCard />
        </Col>
        <Col span={6}>
          <CharacterCard />
        </Col>
        <Col span={6}>
          <CharacterCard />
        </Col>
      </Row>
    </div>
  );
};
export default CharacterList;
