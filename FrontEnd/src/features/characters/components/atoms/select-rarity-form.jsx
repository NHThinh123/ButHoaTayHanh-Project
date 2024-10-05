import { Form, Select } from "antd";
import DefaultTitle from "../../../../components/atoms/default-title";
import TagCustom from "../../../../components/atoms/tag-custom";

const { Option } = Select;
const SelectRarityForm = () => {
  return (
    <Form.Item
      name="rarity"
      label={<DefaultTitle>Phẩm chất: </DefaultTitle>}
      layout="horizontal"
      rules={[
        {
          required: true,
          message: "Vui lòng nhập chọn phẩm chất nhân vật",
        },
      ]}
    >
      <Select
        placeholder="Chọn Phẩm Chất"
        style={{ minWidth: 100, maxWidth: 200 }}
      >
        <Option key="SSR" value="SSR">
          <TagCustom color={"gold"}>SSR</TagCustom>
        </Option>
        <Option key="SR" value="SR">
          <TagCustom color={"purple"}>SR</TagCustom>
        </Option>
        <Option key="R" value="R">
          <TagCustom color={"blue"}>R</TagCustom>
        </Option>
      </Select>
    </Form.Item>
  );
};

export default SelectRarityForm;
