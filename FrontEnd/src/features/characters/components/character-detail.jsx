import { Col, Layout, List, Row } from "antd";

import CharacterSkill from "./character-skill";
import CharacterImg from "./character-img";
import CharacterDescription from "./character-description";

const CharacterDetail = ({ characterInfoData }) => {
  return (
    <Layout style={{ padding: 8 }}>
      <Row>
        <Col span={8}>
          <CharacterImg img={characterInfoData.image} />
        </Col>
        <Col span={16}>
          <CharacterDescription descriptionData={characterInfoData} />
        </Col>
      </Row>

      <Row>
        <Col>
          <List
            grid={{
              gutter: 16,
              column: 1,
            }}
            dataSource={characterInfoData.skills}
            renderItem={(item) => (
              <List.Item>
                <CharacterSkill skillData={item} />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </Layout>
  );
};

export default CharacterDetail;
