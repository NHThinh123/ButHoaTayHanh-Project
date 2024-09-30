import { Button, Col, Form, Layout, Row } from "antd";

import CharacterDescriptionForm from "../organisms/character-description-form";
import CharacterSkillForm from "../organisms/character-skill-form";
import CharacterImageForm from "../organisms/character-img-form";
import BentoBox from "../../../../components/atoms/bento-box";

const CharacterForm = () => {
  return (
    <Layout style={{ padding: 8, minHeight: "100vh" }}>
      <Form layout="vertical" onFinish={(values) => console.log(values)}>
        <Row>
          <Col span={8}>
            <CharacterImageForm />
          </Col>
          <Col span={16}>
            <CharacterDescriptionForm />
          </Col>
        </Row>

        <Row>
          <Col span={24} style={{ marginBottom: 40 }}>
            <CharacterSkillForm />
          </Col>
        </Row>
        <Row>
          <Col
            span={24}
            style={{
              position: "fixed",
              bottom: 0,
              width: "75%",

              paddingRight: 16,
            }}
          >
            <BentoBox>
              <Form.Item noStyle>
                <Button type="primary" htmlType="submit" block>
                  Cập nhật
                </Button>
              </Form.Item>
            </BentoBox>
          </Col>
        </Row>
      </Form>
    </Layout>
  );
};

export default CharacterForm;
