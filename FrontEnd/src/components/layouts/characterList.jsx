import { Col, Row } from "antd";
import CharacterCard from "../ui/characterCard";

const CharacterList = () => {
  return (
    <div>
      <Row gutter={[20, 20]} wrap>
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
