import { Form, Select } from "antd";
import DefaultTitle from "../../../../components/atoms/default-title";
import DefaultText from "../../../../components/atoms/default-text";
const { Option } = Select;
const SelectRoleForm = () => {
  return (
    <Form.Item
      name="role"
      label={<DefaultTitle>Vai trò: </DefaultTitle>}
      layout="horizontal"
      rules={[
        {
          required: true,
          message: "Vui lòng chọn vai trò của nhân vật",
        },
      ]}
    >
      <Select
        placeholder="Chọn Vai Trò"
        style={{ minWidth: 100, maxWidth: 200 }}
      >
        <Option key="Sát thủ" value="Sát thủ">
          <DefaultText>Sát thủ</DefaultText>
        </Option>
        <Option key="Đấu sĩ" value="Đấu sĩ">
          <DefaultText>Đấu sĩ</DefaultText>
        </Option>
        <Option key="Hỗ trợ" value="Hỗ trợ">
          <DefaultText>Hỗ trợ</DefaultText>
        </Option>
        <Option key="Hồi máu" value="Hồi máu">
          <DefaultText>Hồi máu</DefaultText>
        </Option>
        <Option key="Mưu sĩ" value="Mưu sĩ">
          <DefaultText>Mưu sĩ</DefaultText>
        </Option>
        <Option key="Đỡ đòn" value="Đỡ đòn">
          <DefaultText>Đỡ đòn</DefaultText>
        </Option>
      </Select>
    </Form.Item>
  );
};

export default SelectRoleForm;
