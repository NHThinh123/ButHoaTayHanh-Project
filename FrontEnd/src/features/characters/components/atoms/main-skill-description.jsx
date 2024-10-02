import { Form } from "antd";
import DefaultTitle from "../../../../components/atoms/default-title";
import TextArea from "antd/es/input/TextArea";

const MainSkillDescription = ({ restField, name }) => {
  return (
    <Form.Item
      {...restField}
      name={[name, "mainSkill"]}
      rules={[
        {
          required: true,
          message: "Vui lòng nhập mô tả kỹ năng chính",
        },
      ]}
      label={
        <DefaultTitle style={{ marginBottom: 8 }}>Kỹ năng chính:</DefaultTitle>
      }
    >
      <TextArea
        autoSize={{ minRows: 3, maxRows: 6 }}
        style={{ fontSize: "16px" }}
        placeholder="Mô tả kỹ năng chính của nhân vật"
      />
    </Form.Item>
  );
};

export default MainSkillDescription;
