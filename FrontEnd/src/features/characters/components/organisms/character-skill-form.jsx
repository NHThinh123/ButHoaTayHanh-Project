import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Space,
  message,
} from "antd";
import BentoBox from "../../../../components/atoms/bento-box";
import TextArea from "antd/es/input/TextArea";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import DefaultTitle from "../../../../components/atoms/default-title";
import EffectSkillForm from "../molecules/effect-skill-form";
import { useState } from "react";

const CharacterSkillForm = ({ existingEffects }) => {
  const [modalData, setModalData] = useState({ visible: false, index: null });

  const handleDeleteSkill = (index, fieldsLength) => {
    if (fieldsLength <= 1) {
      message.warning("Không thể xóa kỹ năng, phải có ít nhất 1 kỹ năng.");
      return;
    }
    setModalData({ visible: true, index });
  };

  const confirmDelete = (remove) => {
    remove(modalData.index);
    setModalData({ visible: false, index: null });
  };

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
                    <Form.Item
                      {...restField}
                      name={[name, "title"]}
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập tên kỹ năng",
                        },
                      ]}
                      label={
                        <DefaultTitle style={{ marginBottom: 8 }}>
                          Tên kỹ năng:
                        </DefaultTitle>
                      }
                    >
                      <Input
                        placeholder="Nhập tên kỹ năng"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      {...restField}
                      name={[name, "cooldown"]}
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập số lượt hồi chiêu",
                        },
                      ]}
                      label={
                        <DefaultTitle style={{ marginBottom: 8 }}>
                          Hồi chiêu:
                        </DefaultTitle>
                      }
                    >
                      <InputNumber
                        addonAfter="(lượt)"
                        max={10}
                        min={0}
                        formatter={(value) =>
                          value == 0 && value ? "nội tại" : value
                        }
                        parser={(value) => (value === "nội tại" ? 0 : value)}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  {...restField}
                  name={[name, "mainSkill"]}
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập mô tả kỹ năng chính",
                    },
                  ]}
                  label={
                    <DefaultTitle style={{ marginBottom: 8 }}>
                      Kỹ năng chính:
                    </DefaultTitle>
                  }
                >
                  <TextArea
                    autoSize={{ minRows: 3, maxRows: 6 }}
                    style={{ fontSize: "16px" }}
                    placeholder="Mô tả kỹ năng chính của nhân vật"
                  />
                </Form.Item>

                {/* Sub Skills */}
                <Form.List name={[name, "subSkill"]}>
                  {(subSkillFields, subSkillOpt) => (
                    <div>
                      <DefaultTitle style={{ marginBottom: 8 }}>
                        Kỹ năng phụ:
                      </DefaultTitle>
                      {subSkillFields.map(
                        ({ key: subKey, ...subSkillField }) => (
                          <Row
                            key={subKey}
                            style={{
                              marginBottom: 16,
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Col span={20} style={{ marginLeft: 16 }}>
                              <Form.Item
                                {...subSkillField}
                                validateTrigger={["onChange", "onBlur"]}
                                rules={[
                                  {
                                    required: true,
                                    whitespace: true,
                                    message:
                                      "Vui lòng nhập kỹ năng phụ hoặc xóa trường này.",
                                  },
                                ]}
                                noStyle
                              >
                                <TextArea
                                  autoSize={{ maxRows: 3 }}
                                  placeholder="Nhập kỹ năng phụ"
                                  style={{ width: "100%", fontSize: 16 }}
                                />
                              </Form.Item>
                            </Col>
                            <Col>
                              <MinusCircleOutlined
                                onClick={() =>
                                  subSkillOpt.remove(subSkillField.name)
                                }
                                style={{
                                  fontSize: 24,
                                  marginLeft: 16,
                                  color: "red",
                                }}
                              />
                            </Col>
                          </Row>
                        )
                      )}
                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => subSkillOpt.add()}
                          block
                          icon={<PlusOutlined />}
                        >
                          Thêm kỹ năng phụ
                        </Button>
                      </Form.Item>
                    </div>
                  )}
                </Form.List>

                {/* Effects */}
                <Form.Item
                  {...restField}
                  name={[name, "effectSkill"]}
                  label={<DefaultTitle>Hiệu ứng kỹ năng:</DefaultTitle>}
                >
                  <EffectSkillForm existingEffects={existingEffects} />
                </Form.Item>
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

          <Modal
            title="Bạn muốn xóa kỹ năng này?"
            open={modalData.visible}
            onOk={() => confirmDelete(remove)}
            onCancel={() => setModalData({ visible: false, index: null })}
            okType="danger"
          >
            <p>Xác nhận xóa kỹ năng này?</p>
          </Modal>
        </>
      )}
    </Form.List>
  );
};

export default CharacterSkillForm;
