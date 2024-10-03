import { Button, Col, Form, Layout, Row } from "antd";

import CharacterDescriptionForm from "../organisms/character-description-form";
import CharacterSkillForm from "../organisms/character-skill-form";
import CharacterImageForm from "../organisms/character-img-form";
import BentoBox from "../../../../components/atoms/bento-box";
import useCharacterForm from "../../hooks/useCharacterForm";

const CharacterForm = () => {
  const {
    onFinish,
    setFileList,
    form,
    modalData,
    setModalData,
    handleDeleteSkill,
    confirmDelete,
    effectData,
  } = useCharacterForm();
  return (
    <Layout style={{ padding: 8, minHeight: "100vh" }}>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Row>
          <Col span={8}>
            <CharacterImageForm setFileList={setFileList} />
          </Col>
          <Col span={16}>
            <CharacterDescriptionForm />
          </Col>
        </Row>

        <Row>
          <Col span={24} style={{ marginBottom: 40 }}>
            <CharacterSkillForm
              modalData={modalData}
              setModalData={setModalData}
              handleDeleteSkill={handleDeleteSkill}
              confirmDelete={confirmDelete}
              effectData={effectData}
            />
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
