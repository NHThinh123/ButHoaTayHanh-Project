import { Select, Form, List, Col, Typography } from "antd";
import DefaultTitle from "../../../../components/atoms/default-title";
import ModalAddSkillForm from "./modal-add-skill-form";
import TagCustom from "../../../../components/atoms/tag-custom";

const { Option } = Select;

const EffectSkillForm = ({
  effectData,
  restField,
  name,
  handleEffectSelect,
  selectedEffects,
  showAddEffectModal,
  handleAddEffectModalCancel,
  handleAddEffectModalOk,
  isModalAddEffectVisible,
  formEffect,
}) => {
  return (
    <div>
      <Form.Item
        {...restField}
        name={[name, "effectSkill"]}
        label={<DefaultTitle>Hiệu ứng kỹ năng:</DefaultTitle>}
        rules={[
          {
            required: true,
            message: "Vui lòng nhập kỹ năng phụ hoặc xóa trường này.",
          },
        ]}
      >
        <Select
          style={{ width: "100%" }}
          mode="multiple"
          placeholder="Chọn hiệu ứng"
          onChange={handleEffectSelect}
        >
          {effectData.map((effect) => (
            <Option key={effect._id} value={effect._id}>
              <TagCustom color={effect.colorEffect}>
                {effect.nameEffect}
              </TagCustom>
            </Option>
          ))}
        </Select>
      </Form.Item>

      {selectedEffects.length > 0 && (
        <List
          dataSource={selectedEffects}
          renderItem={(item) => (
            <List.Item>
              <Col span={24}>
                <Typography.Text style={{ fontSize: 16, width: "100%" }}>
                  <TagCustom color={item.colorEffect}>
                    {`${item.nameEffect} :`}
                  </TagCustom>
                  {item.descriptionEffect}
                </Typography.Text>
              </Col>
            </List.Item>
          )}
        />
      )}

      <ModalAddSkillForm
        showAddEffectModal={showAddEffectModal}
        handleAddEffectModalCancel={handleAddEffectModalCancel}
        handleAddEffectModalOk={handleAddEffectModalOk}
        isModalAddEffectVisible={isModalAddEffectVisible}
        formEffect={formEffect}
      />
    </div>
  );
};

export default EffectSkillForm;
