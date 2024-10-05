import { Form, Select } from "antd";

import DefaultTitle from "../../../../components/atoms/default-title";
import TagCustom from "../../../../components/atoms/tag-custom";
const { Option } = Select;
const SelectFactionForm = () => {
  return (
    <Form.Item
      name="faction"
      label={<DefaultTitle>Phe: </DefaultTitle>}
      layout="horizontal"
      rules={[
        {
          required: true,
          message: "Vui lòng chọn phe của nhân vật",
        },
      ]}
    >
      <Select
        placeholder="Chọn Vai Trò"
        style={{ minWidth: 100, maxWidth: 200 }}
      >
        <Option key="Tiên giới" value="Tiên giới">
          <TagCustom color={"blue"}>Tiên giới</TagCustom>
        </Option>
        <Option key="Nhân giới" value="Nhân giới">
          <TagCustom color={"green"}>Nhân giới</TagCustom>
        </Option>
        <Option key="Yêu giới" value="Yêu giới">
          <TagCustom color={"red"}>Yêu giới</TagCustom>
        </Option>
        <Option key="Thánh giới" value="Thánh giới">
          <TagCustom color={"gold"}>Thánh giới</TagCustom>
        </Option>
        <Option key="Ma giới" value="Ma giới">
          <TagCustom color={"purple"}>Ma giới</TagCustom>
        </Option>
      </Select>
    </Form.Item>
  );
};

export default SelectFactionForm;
