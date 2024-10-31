import { Button, Col, Form, Layout, Row } from "antd";

import CharacterDescriptionForm from "../organisms/character-description-form";
import CharacterSkillForm from "../organisms/character-skill-form";
import CharacterImageForm from "../organisms/character-img-form";
import BentoBox from "../../../../components/atoms/bento-box";
import useCharacterForm from "../../hooks/useCharacterForm";
import useEffectData from "../../hooks/useEffectData";

const CharacterForm = () => {
  const {
    onFinish,
    setFileList,
    form,
    modalData,
    setModalData,
    handleDeleteSkill,
    confirmDelete,
  } = useCharacterForm();
  const {
    effectData,
    showAddEffectModal,
    handleAddEffectModalCancel,
    handleAddEffectModalOk,
    isModalAddEffectVisible,
    formEffect,
  } = useEffectData();
  return (
    <Layout style={{ padding: 8, minHeight: "100vh" }}>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Row>
          <Col xs={24} sm={24} md={24} lg={10}>
            <CharacterImageForm setFileList={setFileList} />
          </Col>
          <Col xs={24} sm={24} md={24} lg={14}>
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
              showAddEffectModal={showAddEffectModal}
              handleAddEffectModalCancel={handleAddEffectModalCancel}
              handleAddEffectModalOk={handleAddEffectModalOk}
              isModalAddEffectVisible={isModalAddEffectVisible}
              formEffect={formEffect}
            />
          </Col>
        </Row>
        <Row>
          <Col
            span={24}
            style={{
              position: "fixed",
              bottom: 0,
              width: "82%",
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
