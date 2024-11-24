import { Select, Form, List, Col, Typography } from "antd";
import DefaultTitle from "../../../../components/atoms/default-title";
import ModalAddSkillForm from "./modal-add-skill-form";
import TagCustom from "../../../../components/atoms/tag-custom";
import { useState } from "react";

const { Option } = Select;
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const EffectSkillForm = ({
  effectData,
  restField,
  name,
  showAddEffectModal,
  handleAddEffectModalCancel,
  handleAddEffectModalOk,
  isModalAddEffectVisible,
  formEffect,
}) => {
  const [selectedEffects, setSelectedEffects] = useState([]);

  const handleEffectSelect = (dataEffectForm) => {
    const selected = effectData.filter((effect) =>
      dataEffectForm.includes(effect._id)
    );
    console.log("aaaaaaaaaa", dataEffectForm);
    setSelectedEffects(selected);
  };
  return (
    <div>
      <Form.Item
        {...restField}
        name={[name, "effectSkill"]}
        label={<DefaultTitle>Hiệu ứng kỹ năng:</DefaultTitle>}
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
                {capitalizeFirstLetter(effect.nameEffect)}
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
                    {`${capitalizeFirstLetter(item.nameEffect)} :`}
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
