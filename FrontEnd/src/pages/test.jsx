import { Button, Col, Form, Layout, Row, Spin } from "antd";
import useCharacterForm from "../features/characters/hooks/useCharacterForm";
import useEffectData from "../features/characters/hooks/useEffectData";
import CharacterImageForm from "../features/characters/components/organisms/character-img-form";
import CharacterDescriptionForm from "../features/characters/components/organisms/character-description-form";
import CharacterSkillForm from "../features/characters/components/organisms/character-skill-form";
import BentoBox from "../components/atoms/bento-box";
import useCharacterInfoData from "../features/characters/hooks/useCharacterInfoData";

const CharacterForm = () => {
  const {
    onFinish,
    setFileList,
    form,
    modalData,
    setModalData,
    handleDeleteSkill,
    confirmDelete,
    isLoading,
  } = useCharacterForm();
  const {
    effectData,
    showAddEffectModal,
    handleAddEffectModalCancel,
    handleAddEffectModalOk,
    isModalAddEffectVisible,
    formEffect,
  } = useEffectData();

  const { characterInfoData } = useCharacterInfoData();

  console.log("characterInfoData", characterInfoData);
  return (
    <div style={{ position: "relative" }}>
      {/* Spin hiển thị khi loading */}
      {isLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin size="large" />
        </div>
      )}

      <Layout style={{ padding: 8, minHeight: "100vh" }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={characterInfoData}
        >
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
    </div>
  );
};

export default CharacterForm;
