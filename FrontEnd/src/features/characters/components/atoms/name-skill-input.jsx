import { Form, Input } from "antd";

import DefaultTitle from "../../../../components/atoms/default-title";

const NameSkillInput = ({ restField, name }) => {
  return (
    <Form.Item
      {...restField}
      name={[name, "title"]}
      rules={[
        {
          required: true,
          message: "Vui lòng nhập tên kỹ năng",
        },
      ]}
      label={
        <DefaultTitle style={{ marginBottom: 8 }}>Tên kỹ năng:</DefaultTitle>
      }
    >
      <Input
        placeholder="Nhập tên kỹ năng"
        style={{ fontSize: "16px", fontWeight: "bold" }}
      />
    </Form.Item>
  );
};

export default NameSkillInput;
