import { Col, Form, Layout, Row } from "antd";

import CharacterDescriptionForm from "../organisms/character-description-form";
import CharacterSkillForm from "../organisms/character-skill-form";
import CharacterImageForm from "../organisms/character-img-form";
import ButtonForm from "../../../auth/components/button-form";
import BentoBox from "../../../../components/atoms/bento-box";

const CharacterForm = () => {
  return (
    <Layout style={{ padding: 8 }}>
      <Form layout="vertical" onFinish={(values) => console.log(values)}>
        <Row>
          <Col span={24}>
            <BentoBox padding={8} style={{ margin: 0 }}>
              <ButtonForm>Lưu</ButtonForm>
            </BentoBox>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <CharacterImageForm />
          </Col>
          <Col span={16}>
            <CharacterDescriptionForm />
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <CharacterSkillForm />
          </Col>
        </Row>
      </Form>
    </Layout>
  );
};

export default CharacterForm;
