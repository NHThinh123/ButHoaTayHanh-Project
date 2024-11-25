import { Avatar, Button, Col, Flex, Form, Row, Select, Spin } from "antd";

import { format } from "date-fns";
import useTopicForm from "../../hooks/useTopicForm";
import BentoBox from "../../../../components/atoms/bento-box";
import DefaultTitle from "../../../../components/atoms/default-title";
import DefaultText from "../../../../components/atoms/default-text";
import TextArea from "antd/es/input/TextArea";
import ImageUpload from "../molecules/imageUpload";
import { useEffect } from "react";

const TopicForm = ({ initialValues, mode, id }) => {
  const category = [
    { value: "Thảo luận", label: "Thảo luận" },
    { value: "Chiến lược", label: "Chiến lược" },
    { value: "Sự kiện", label: "Sự kiện" },
    { value: "Bảo trì", label: "Bảo trì" },
    { value: "Thông báo", label: "Thông báo" },
    { value: "Chia sẻ thành tích", label: "Chia sẻ thành tích" },
  ];
  const { onFinish, onChange, author, setFileList, form, loading } =
    useTopicForm();
  useEffect(() => {
    if (mode === "edit" && initialValues) {
      form.setFieldsValue(initialValues);
      console.log("Current form values:", form.getFieldsValue());
    }
  }, [initialValues, form]);
  return (
    <div style={{ position: "relative" }}>
      {/* Spin hiển thị khi loading */}
      {loading && (
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
      <Form
        layout="vertical"
        onFinish={
          mode === "create"
            ? onFinish
            : (values) => {
                onChange(values, id);
              }
        }
        form={form}
      >
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col span={16}>
            {/* phần header */}
            <BentoBox padding={28} style={{ margin: "12px 8px" }}>
              <Row>
                <Col span={24}>
                  <Flex gap="middle">
                    <Avatar
                      size={40}
                      style={{
                        backgroundColor: "#fde3cf",
                        color: "#f56a00",
                      }}
                    >
                      {author?.username?.charAt(0).toUpperCase() ?? "U"}
                    </Avatar>
                    <Flex vertical>
                      <DefaultTitle>{author?.username}</DefaultTitle>
                      <DefaultText
                        style={{
                          marginTop: 8,
                          fontSize: 14,
                          display: "inline-flex",
                          gap: 16,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {format(
                          mode === "edit"
                            ? initialValues?.uploadAt
                            : new Date(),
                          "dd/MM/yyyy"
                        )}
                        <Form.Item
                          initialValue={"Thảo luận"}
                          name={"category"}
                          noStyle
                        >
                          <Select options={category} />
                        </Form.Item>
                      </DefaultText>
                    </Flex>
                  </Flex>
                </Col>
              </Row>
            </BentoBox>

            <BentoBox padding={28}>
              <Form.Item
                name="title"
                label={
                  <DefaultTitle style={{ marginBottom: 8, fontSize: "18px" }}>
                    Tiêu đề bài viết
                  </DefaultTitle>
                }
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tiêu đề bài viết",
                  },
                  {
                    min: 5,
                    message: "Tiêu đề phải có ít nhất 5 ký tự",
                  },
                  {
                    max: 200,
                    message: "Tiêu đề không được vượt quá 100 ký tự",
                  },
                ]}
              >
                <TextArea
                  placeholder="Nhập tiêu đề bài viết"
                  style={{ fontSize: "18px", fontWeight: "bold" }}
                  autoSize={{
                    minRows: 1,
                    maxRows: 2,
                  }}
                />
              </Form.Item>

              <Form.Item
                name="description"
                label={
                  <DefaultTitle style={{ marginBottom: 8 }}>
                    Nội dung bài viết
                  </DefaultTitle>
                }
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập nội dung bài viết",
                  },
                  {
                    min: 20,
                    message: "Nội dung phải có ít nhất 20 ký tự",
                  },
                  {
                    max: 2000,
                    message: "Nội dung không được vượt quá 2000 ký tự",
                  },
                ]}
              >
                <TextArea
                  autoSize={{
                    minRows: 6,
                    maxRows: 24,
                  }}
                  style={{ fontSize: "16px" }}
                  placeholder="Nội dung bài viết"
                />
              </Form.Item>

              <ImageUpload
                setFileList={setFileList}
                initialImage={initialValues?.image}
              />
            </BentoBox>
            <div style={{ padding: 6, marginBottom: 20 }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ padding: 8 }}
                block
              >
                Đăng bài viết
              </Button>
              <Button
                variant="outlined"
                color="primary"
                block
                style={{ marginTop: 12, padding: 8 }}
              >
                Trở về
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default TopicForm;
