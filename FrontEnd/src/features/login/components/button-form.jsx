import { Button, Form } from "antd";

const ButtonForm = ({ children }) => {
  return (
    <Form.Item>
      <Button
        size="large"
        block
        type="primary"
        htmlType="submit"
        style={{ margin: "10px 0px" }}
      >
        {children}
      </Button>
    </Form.Item>
  );
};

export default ButtonForm;
