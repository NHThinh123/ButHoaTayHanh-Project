import { Form, InputNumber } from "antd";
import DefaultTitle from "../../../../components/atoms/default-title";

const CooldownInput = ({ restField, name }) => {
  return (
    <Form.Item
      {...restField}
      name={[name, "cooldown"]}
      rules={[
        {
          required: true,
          message: "Vui lòng nhập số lượt hồi chiêu",
        },
      ]}
      label={
        <DefaultTitle style={{ marginBottom: 8 }}>Hồi chiêu:</DefaultTitle>
      }
    >
      <InputNumber
        addonAfter="(lượt)"
        max={10}
        min={0}
        formatter={(value) => (value == 0 && value ? "nội tại" : value)}
        parser={(value) => (value === "nội tại" ? 0 : value)}
      />
    </Form.Item>
  );
};

export default CooldownInput;
