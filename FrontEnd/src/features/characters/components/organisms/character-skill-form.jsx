import { Button, Col, Form, Input, InputNumber, Row, Space } from "antd";
import BentoBox from "../../../../components/atoms/bento-box";
import TextArea from "antd/es/input/TextArea";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import DefaultTitle from "../../../../components/atoms/default-title";

const CharacterSkillForm = () => {
  return (
    <Form.List name="skills">
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
                    >
                      <DefaultTitle style={{ marginBottom: 8 }}>
                        Tên kỹ năng:
                      </DefaultTitle>
                      <Input
                        placeholder="Nhập tên kỹ năng"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item
                      {...restField}
                      name={[name, "cooldown"]}
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập số lượt hồi chiêu",
                        },
                      ]}
                    >
                      <DefaultTitle style={{ marginBottom: 8 }}>
                        Hồi chiêu:
                      </DefaultTitle>
                      <InputNumber
                        addonAfter="(lượt)"
                        defaultValue={1}
                        max={10}
                        min={1}
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
                >
                  <DefaultTitle style={{ marginBottom: 8 }}>
                    Kỹ năng chính:
                  </DefaultTitle>
                  <TextArea
                    autoSize={{
                      minRows: 3,
                      maxRows: 6,
                    }}
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
                      {subSkillFields.map((subSkillField) => (
                        <Row
                          key={subSkillField.key}
                          style={{
                            marginBottom: 16,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {"o "}
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
                                autoSize={{
                                  minRows: 1,
                                  maxRows: 3,
                                }}
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
                      ))}
                      <Form.Item>
                        <Button
                          type="dashed"
                          color="primary"
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
              </Space>
              <Button
                danger
                onClick={() => remove(name)}
                block
                icon={<MinusCircleOutlined />}
              >
                Xóa kỹ năng này
              </Button>
            </BentoBox>
          ))}
          <Form.Item style={{ marginTop: 16 }}>
            <Button
              color="primary"
              type="dashed"
              onClick={() => add()}
              block
              icon={<PlusOutlined />}
            >
              Thêm kỹ năng
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  );
};

export default CharacterSkillForm;
