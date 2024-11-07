import { Button, Col, Form, Row } from "antd";
import BentoBox from "../../../../components/atoms/bento-box";
import TextArea from "antd/es/input/TextArea";
import { SendOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { AuthContext } from "../../../../contexts/auth.context";

const ReplyForm = ({ form, handleReply, textAreaRef }) => {
  const { auth } = useContext(AuthContext);
  return (
    <BentoBox style={{ margin: 0 }}>
      <Form form={form} onFinish={handleReply}>
        <Row>
          <Col span={22}>
            <Form.Item name="content" noStyle>
              <TextArea
                ref={textAreaRef} // Tham chiếu TextArea tới ref
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
  );
};

export default ReplyForm;
