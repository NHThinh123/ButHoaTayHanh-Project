import { Col, Layout, Row } from "antd";

import CharacterSkill from "./character-skill";
import CharacterImg from "./character-img";
import CharacterDescription from "./character-description";

const CharacterDetail = () => {
  return (
    <Layout style={{ padding: 8 }}>
      <Row>
        <Col span={8}>
          <CharacterImg />
        </Col>
        <Col span={16}>
          <CharacterDescription />
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <CharacterSkill />
          <CharacterSkill />
          <CharacterSkill />
          <CharacterSkill />
        </Col>
      </Row>
    </Layout>
  );
};

export default CharacterDetail;
