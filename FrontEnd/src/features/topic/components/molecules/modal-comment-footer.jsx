import { Avatar, Button, Col, Form, Input, Row } from "antd";
import BentoBox from "../../../../components/atoms/bento-box";
import { SendOutlined } from "@ant-design/icons";
import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../../../contexts/auth.context";

const { TextArea } = Input;

const ModalCommentFooter = ({ onFinishComment, form }) => {
  const textAreaRef = useRef(null);
  const { auth } = useContext(AuthContext);
  useEffect(() => {
    // Tự động focus vào TextArea khi component được mount
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, []);

  const handleSubmit = (values) => {
    // Viết hoa chữ cái đầu tiên của bình luận khi gửi
    const capitalizedContent =
      values.content.charAt(0).toUpperCase() + values.content.slice(1);
    onFinishComment({ ...values, content: capitalizedContent });
  };

  return (
    <Row>
      <Col span={2} style={{ display: "flex", paddingTop: 12 }}>
        <Avatar
          size={40}
          style={{
            backgroundColor: "#fde3cf",
            color: "#f56a00",
          }}
        >
          {auth.user?.username?.charAt(0).toUpperCase() ?? "U"}
        </Avatar>
      </Col>
      <Col span={22}>
        <BentoBox padding={8}>
          <Form form={form} onFinish={handleSubmit}>
            <Row>
              <Col span={22}>
                <Form.Item name="content" noStyle>
                  <TextArea
                    ref={textAreaRef}
                    placeholder={`Bình luận dưới tên ${auth.user.username}`}
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
