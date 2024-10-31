import { Avatar, Button, Col, Form, Input, Row } from "antd";
import BentoBox from "../../../../components/atoms/bento-box";
import { SendOutlined } from "@ant-design/icons";
import { useEffect, useRef } from "react";

const { TextArea } = Input;

const ModalCommentFooter = ({ onFinishComment, form }) => {
  const textAreaRef = useRef(null);

  useEffect(() => {
    // Tự động focus vào TextArea khi component được mount
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, []);

  const handleValuesChange = (changedValues) => {
    if (changedValues.content) {
      const newContent = changedValues.content;
      // Tự động viết hoa chữ cái đầu tiên
      const capitalizedContent =
        newContent.charAt(0).toUpperCase() + newContent.slice(1);
      form.setFieldsValue({ content: capitalizedContent });
    }
  };

  return (
    <Row>
      <Col span={2} style={{ display: "flex", paddingTop: 12 }}>
        <Avatar
          src={
            "https://yt3.ggpht.com/SxJooAauEAJgyz_9MqB21DvebRRXY5kPbVy4lB_95o3-8yGsMf1neXFEp0ujD-vdVykPPb4l=s88-c-k-c0x00ffffff-no-rj"
          }
        ></Avatar>
      </Col>
      <Col span={22}>
        <BentoBox padding={8}>
          <Form
            form={form}
            onFinish={(values) => onFinishComment(values)}
            onValuesChange={handleValuesChange}
          >
            <Row>
              <Col span={22}>
                <Form.Item name="content" noStyle>
                  <TextArea
                    ref={textAreaRef}
                    placeholder="Bình luận dưới tên KAFF Gaming"
                    variant="borderless"
                    autoSize={{
                      minRows: 2,
                      maxRows: 5,
                    }}
                  />
                </Form.Item>
              </Col>
              <Col span={2}>
                <Form.Item noStyle>
                  <Button htmlType="submit" block type="text">
                    <SendOutlined />
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </BentoBox>
      </Col>
    </Row>
  );
};

export default ModalCommentFooter;
