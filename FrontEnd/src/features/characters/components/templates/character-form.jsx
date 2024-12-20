import { Button, Col, Form, Layout, Row, Spin } from "antd";

import CharacterDescriptionForm from "../organisms/character-description-form";
import CharacterSkillForm from "../organisms/character-skill-form";
import CharacterImageForm from "../organisms/character-img-form";
import BentoBox from "../../../../components/atoms/bento-box";
import useCharacterForm from "../../hooks/useCharacterForm";
import useEffectData from "../../hooks/useEffectData";
import { useEffect } from "react";

const CharacterForm = ({ mode, initialValues, id }) => {
  const {
    onFinish,
    onChangeData,
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

  useEffect(() => {
    if (mode === "edit" && initialValues) {
      form.setFieldsValue(initialValues);
      console.log("Current form values:", form.getFieldsValue());
    }
  }, [initialValues, form]);
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
          onFinish={
            mode === "create"
              ? onFinish
              : (values) => {
                  onChangeData(values, id);
                }
          }
        >
          <Row>
            <Col xs={24} sm={24} md={24} lg={10}>
              <CharacterImageForm
                setFileList={setFileList}
                initialImage={initialValues?.image} // Truyền ảnh mặc định
              />
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
