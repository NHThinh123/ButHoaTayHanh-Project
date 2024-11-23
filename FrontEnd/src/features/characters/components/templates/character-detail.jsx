import { Col, Layout, List, Row } from "antd";

import CharacterSkill from "../organisms/character-skill";
import CharacterImg from "../atoms/character-img";
import CharacterDescription from "../organisms/character-description";

const CharacterDetail = ({ characterInfoData, deleteCharacter }) => {
  return (
    <Layout style={{ padding: 8 }}>
      <Row>
        <Col span={8}>
          <CharacterImg img={characterInfoData.image} />
        </Col>
        <Col span={16}>
          <CharacterDescription
            descriptionData={characterInfoData}
            deleteCharacter={deleteCharacter}
          />
        </Col>
      </Row>

      <Row>
        <Col span={24}>
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
