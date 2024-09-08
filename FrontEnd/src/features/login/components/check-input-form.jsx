import { Checkbox, Form } from "antd";

const CheckInputForm = ({ name, valuePropName, children }) => {
  return (
    <Form.Item name={name} valuePropName={valuePropName} style={{}}>
      <Checkbox
        style={{
          margin: 0,
        }}
      >
        {children}
      </Checkbox>
    </Form.Item>
  );
};

export default CheckInputForm;
