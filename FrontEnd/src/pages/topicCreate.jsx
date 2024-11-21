import {
  Avatar,
  Col,
  Flex,
  Form,
  Input,
  Row,
  Select,
  Button,
  Modal,
  Space,
  Checkbox,
} from "antd";
import { PlusOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";

import BentoBox from "../components/atoms/bento-box";
import DefaultTitle from "../components/atoms/default-title";
import DefaultText from "../components/atoms/default-text";
import TextArea from "antd/es/input/TextArea";
import useTopicForm from "../features/topic/hooks/useTopicForm";
import ImageUpload from "../features/topic/components/molecules/image-upload";

const TopicCreatePage = () => {
  const {
    onFinish,
    showModal,
    handleModalOk,
    handleDelete,
    handleEdit,
    handleFieldChange,
    category,
    form,
    modalVisible,
    subContents,
    modalForm,
    editingIndex,
    setModalVisible,
    setEditingIndex,
  } = useTopicForm();

  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Col span={16}>
          {/* Header */}
          <BentoBox padding={28}>
            <Row>
              <Col span={18}>
                <Flex gap="middle" align="center">
                  <Avatar
                    size={40}
                    style={{
                      backgroundColor: "#fde3cf",
                      color: "#f56a00",
                    }}
                  >
                    U
                  </Avatar>
                  <Flex vertical>
                    <DefaultTitle>KAFF Gaming</DefaultTitle>
                    <DefaultText
                      style={{ fontSize: 14, display: "inline-flex" }}
                    >
                      11/11/2024
                      <span
                        style={{
                          color: "#4096FF",
                          fontSize: 16,
                          fontWeight: 700,
                          marginLeft: 12,
                        }}
                      >
                        <Form.Item
                          initialValue={"Thảo luận"}
                          name={"category"}
                          noStyle
                        >
                          <Select options={category} />
                        </Form.Item>
                      </span>
                    </DefaultText>
                  </Flex>
                </Flex>
              </Col>
              <Col span={6} style={{ textAlign: "right" }}>
                {/* Submit Button */}
                <Row style={{ marginTop: 8, gap: 16 }}>
                  <Button>Hủy</Button>
                  <Button type="primary" htmlType="submit">
                    Lưu bài đăng
                  </Button>
                </Row>
              </Col>
            </Row>
          </BentoBox>

          {/* Main Content */}
          <BentoBox padding={28} marginTop={16}>
            <Row>
              <Col span={24}>
                <Form.Item
                  name="title"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập tiêu đề bài đăng",
                    },
                  ]}
                  label={
                    <DefaultTitle style={{ marginBottom: 8 }}>
                      Tiêu đề:
                    </DefaultTitle>
                  }
                >
                  <Input
                    style={{ fontSize: "16px", fontWeight: "bold" }}
                    placeholder="Nhập tiêu đề bài thảo luận"
                  />
                </Form.Item>

                <Form.Item
                  name="content"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập nội dung",
                    },
                  ]}
                  label={
                    <DefaultTitle style={{ marginBottom: 8 }}>
                      Nội dung
                    </DefaultTitle>
                  }
                >
                  <TextArea
                    placeholder="Nhập nội dung bài thảo luận"
                    autoSize={{ minRows: 5 }}
                  />
                </Form.Item>

                <Form.Item
                  name="mainImage"
                  label={
                    <DefaultTitle style={{ marginBottom: 8 }}>
                      Hình ảnh chính
                    </DefaultTitle>
                  }
                >
                  <ImageUpload />
                </Form.Item>
              </Col>
            </Row>
          </BentoBox>

          {/* Sub Contents */}
          {subContents.map((content, index) => (
            <BentoBox key={index} padding={28} marginTop={16}>
              <Row justify="end" style={{ marginBottom: 16 }}>
                <Space>
                  <Button
                    icon={<EditOutlined />}
                    onClick={() => handleEdit(index)}
                  >
                    Chỉnh sửa
                  </Button>
                  <Button
                    icon={<DeleteOutlined />}
                    danger
                    onClick={() => handleDelete(index)}
                  >
                    Xóa
                  </Button>
                </Space>
              </Row>

              {content.sections.title && (
                <Form.Item
                  name={["subContents", index, "title"]}
                  label="Tiêu đề phụ"
                  onChange={(e) =>
                    handleFieldChange(index, "title", e.target.value)
                  }
                >
                  <Input placeholder="Nhập tiêu đề phụ" />
                </Form.Item>
              )}

              {content.sections.content && (
                <Form.Item
                  name={["subContents", index, "content"]}
                  label="Nội dung phụ"
                  onChange={(e) =>
                    handleFieldChange(index, "content", e.target.value)
                  }
                >
                  <TextArea
                    placeholder="Nhập nội dung phụ"
                    autoSize={{ minRows: 3 }}
                  />
                </Form.Item>
              )}

              {content.sections.image && (
                <Form.Item
                  name={["subContents", index, "imageUrl"]}
                  label="Hình ảnh"
                >
                  <ImageUpload
                    value={content.data.imageUrl}
                    onChange={(url) =>
                      handleFieldChange(index, "imageUrl", url)
                    }
                  />
                </Form.Item>
              )}
            </BentoBox>
          ))}

          {/* Add Sub Content Button */}
          <Row justify="center" style={{ marginTop: 10, margin: 6 }}>
            <Button
              color="primary"
              variant="dashed"
              icon={<PlusOutlined />}
              onClick={showModal}
              block
            >
              Thêm nội dung phụ
            </Button>
          </Row>
        </Col>
      </Row>

      {/* Modal */}
      <Modal
        title={
          editingIndex !== null ? "Chỉnh sửa nội dung phụ" : "Thêm nội dung phụ"
        }
        open={modalVisible}
        onOk={handleModalOk}
        onCancel={() => {
          setModalVisible(false);
          setEditingIndex(null);
          modalForm.resetFields();
        }}
      >
        <Form form={modalForm} layout="vertical">
          <Form.Item name="includeTitle" valuePropName="checked">
            <Checkbox>Thêm tiêu đề</Checkbox>
          </Form.Item>

          <Form.Item name="includeContent" valuePropName="checked">
            <Checkbox>Thêm nội dung</Checkbox>
          </Form.Item>

          <Form.Item name="includeImage" valuePropName="checked">
            <Checkbox>Thêm hình ảnh</Checkbox>
          </Form.Item>
        </Form>
      </Modal>
    </Form>
  );
};

export default TopicCreatePage;
