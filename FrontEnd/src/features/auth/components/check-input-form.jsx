import { Checkbox, Form } from "antd";

const CheckInputForm = ({ name, valuePropName, children, onChange }) => {
  return (
    <Form.Item name={name} valuePropName={valuePropName} style={{}}>
      <Checkbox
        style={{
          margin: 0,
        }}
        onChange={onChange}
      >
        {children}
      </Checkbox>
    </Form.Item>
  );
};

export default CheckInputForm;
