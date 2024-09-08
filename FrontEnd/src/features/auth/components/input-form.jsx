import { Form, Input } from "antd";

const InputForm = ({ label, name, dependencies, rules, style, inputType }) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={rules}
      dependencies={dependencies}
      style={style}
      validateTrigger={["onBlur"]}
    >
      {inputType === "password" ? (
        <Input.Password
          allowClear
          size="large"
          placeholder={label}
          type={inputType}
        />
      ) : (
        <Input allowClear size="large" placeholder={label} type={inputType} />
      )}
    </Form.Item>
  );
};

InputForm.defaultProps = {
  inputType: "text",
};

export default InputForm;
