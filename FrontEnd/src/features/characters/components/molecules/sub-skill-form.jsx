import { Button, Col, Form, Row } from "antd";
import DefaultTitle from "../../../../components/atoms/default-title";
import TextArea from "antd/es/input/TextArea";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const SubSkillForm = ({ name }) => {
  return (
    <Form.List name={[name, "subSkill"]}>
      {(subSkillFields, subSkillOpt) => (
        <div>
          <DefaultTitle style={{ marginBottom: 8 }}>Kỹ năng phụ:</DefaultTitle>
          {subSkillFields.map(({ key: subKey, ...subSkillField }) => (
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
                      message: "Vui lòng nhập kỹ năng phụ hoặc xóa trường này.",
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
                  onClick={() => subSkillOpt.remove(subSkillField.name)}
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
  );
};

export default SubSkillForm;
