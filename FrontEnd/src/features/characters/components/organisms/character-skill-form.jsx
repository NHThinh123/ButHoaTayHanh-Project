import { Button, Col, Form, Row, Space } from "antd";
import BentoBox from "../../../../components/atoms/bento-box";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import EffectSkillForm from "../molecules/effect-skill-form";
import SubSkillForm from "../molecules/sub-skill-form";
import NameSkillInput from "../atoms/name-skill-input";
import CooldownInput from "../atoms/cooldown-input";
import ModalConfirm from "../atoms/modal-confirm";
import MainSkillDescription from "../atoms/main-skill-description";

const CharacterSkillForm = ({
  modalData,
  setModalData,
  handleDeleteSkill,
  confirmDelete,
  effectData,
  handleEffectSelect,
  selectedEffects,
  showAddEffectModal,
  handleAddEffectModalCancel,
  handleAddEffectModalOk,
  isModalAddEffectVisible,
  formEffect,
}) => {
  return (
    <Form.List name="skills" initialValue={[{}]}>
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <BentoBox
              key={key}
              padding={28}
              style={{ marginTop: 16 }}
              backgroundColor="#fff"
            >
              <Space
                direction="vertical"
                style={{ width: "100%" }}
                size="large"
              >
                <Row gutter={16}>
                  <Col span={16}>
                    <NameSkillInput restField={restField} name={name} />
                  </Col>
                  <Col span={6}>
                    <CooldownInput restField={restField} name={name} />
                  </Col>
                </Row>
                <MainSkillDescription restField={restField} name={name} />

                {/* Sub Skills */}
                <SubSkillForm name={name} />

                {/* Effects */}

                <EffectSkillForm
                  effectData={effectData}
                  restField={restField}
                  name={name}
                  handleEffectSelect={handleEffectSelect}
                  selectedEffects={selectedEffects}
                  showAddEffectModal={showAddEffectModal}
                  handleAddEffectModalCancel={handleAddEffectModalCancel}
                  handleAddEffectModalOk={handleAddEffectModalOk}
                  isModalAddEffectVisible={isModalAddEffectVisible}
                  formEffect={formEffect}
                />
              </Space>
              <Button
                danger
                onClick={() => handleDeleteSkill(name, fields.length)}
                block
                icon={<MinusCircleOutlined />}
              >
                Xóa kỹ năng này
              </Button>
            </BentoBox>
          ))}

          <Form.Item style={{ margin: "16px 8px" }}>
            <Button
              type="dashed"
              onClick={() => add()}
              block
              icon={<PlusOutlined />}
            >
              Thêm kỹ năng
            </Button>
          </Form.Item>

          <ModalConfirm
            modalData={modalData}
            confirmDelete={confirmDelete}
            setModalData={setModalData}
            remove={remove}
          />
        </>
      )}
    </Form.List>
  );
};
export default CharacterSkillForm;
