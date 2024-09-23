import {
  Form,
  Input,
  Select,
  Upload,
  Button,
  Space,
  Rate,
  Row,
  Col,
  Typography,
} from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import BentoBox from "../components/atoms/bento-box";

const { TextArea } = Input;
const { Option } = Select;
const { Title } = Typography;

const CharacterForm = ({ initialValues, onSubmit }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onSubmit(values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={initialValues}
    >
      <Row gutter={16}>
        <Col span={8}>
          <BentoBox padding={16}>
            <Form.Item name="image" label="Hình ảnh nhân vật">
              <Upload listType="picture-card" beforeUpload={() => false}>
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Tải lên</div>
                </div>
              </Upload>
            </Form.Item>
          </BentoBox>
        </Col>
        <Col span={16}>
          <BentoBox padding={16}>
            <Title level={2}>
              <Form.Item name="name" noStyle>
                <Input style={{ fontSize: "24px", fontWeight: "bold" }} />
              </Form.Item>
            </Title>
            <Form.Item name="rarity" label="Phẩm chất">
              <Select>
                <Option value="SSR">SSR</Option>
                <Option value="SR">SR</Option>
                <Option value="R">R</Option>
              </Select>
            </Form.Item>
            <Form.Item name="role" label="Vai trò">
              <Input />
            </Form.Item>
            <Form.Item name="faction" label="Phe">
              <Select>
                <Option value="Tiên giới">Tiên giới</Option>
                <Option value="Nhân giới">Nhân giới</Option>
                <Option value="Yêu giới">Yêu giới</Option>
              </Select>
            </Form.Item>
            <Form.Item name="story" label="Cốt truyện">
              <TextArea rows={4} />
            </Form.Item>
            <Title level={4}>Đánh giá sức mạnh:</Title>
            <Form.Item name="pvpScore" label="PVP">
              <Rate />
            </Form.Item>
            <Form.Item name="pveScore" label="PVE">
              <Rate />
            </Form.Item>
          </BentoBox>
        </Col>
      </Row>

      <Form.List name="skills">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <BentoBox key={key} padding={16} style={{ marginTop: 16 }}>
                <Space
                  direction="vertical"
                  style={{ width: "100%" }}
                  size="large"
                >
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        {...restField}
                        name={[name, "title"]}
                        label="Tên kỹ năng"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập tên kỹ năng",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        {...restField}
                        name={[name, "cooldown"]}
                        label="Hồi chiêu (lượt)"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập số lượt hồi chiêu",
                          },
                        ]}
                      >
                        <Input type="number" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item
                    {...restField}
                    name={[name, "description"]}
                    label="Mô tả kỹ năng"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập mô tả kỹ năng",
                      },
                    ]}
                  >
                    <TextArea rows={3} />
                  </Form.Item>
                  <Form.List name={[name, "effects"]}>
                    {(subFields, subOpt) => (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 8,
                        }}
                      >
                        {subFields.map((subField) => (
                          <Space key={subField.key} align="baseline">
                            <Form.Item
                              {...subField}
                              name={[subField.name, "type"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Vui lòng chọn loại hiệu ứng",
                                },
                              ]}
                            >
                              <Select style={{ width: 120 }}>
                                <Option value="Kích nộ">Kích nộ</Option>
                                <Option value="Thiêu đốt">Thiêu đốt</Option>
                                <Option value="Tăng tấn công">
                                  Tăng tấn công
                                </Option>
                              </Select>
                            </Form.Item>
                            <Form.Item
                              {...subField}
                              name={[subField.name, "description"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Vui lòng nhập mô tả hiệu ứng",
                                },
                              ]}
                            >
                              <Input
                                placeholder="Mô tả hiệu ứng"
                                style={{ width: 300 }}
                              />
                            </Form.Item>
                            <MinusCircleOutlined
                              onClick={() => subOpt.remove(subField.name)}
                            />
                          </Space>
                        ))}
                        <Button
                          type="dashed"
                          onClick={() => subOpt.add()}
                          block
                        >
                          + Thêm hiệu ứng
                        </Button>
                      </div>
                    )}
                  </Form.List>
                </Space>
                <Button
                  type="link"
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

      <Form.Item>
        <Button type="primary" htmlType="submit" size="large">
          Lưu nhân vật
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CharacterForm;
