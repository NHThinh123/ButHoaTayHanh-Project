import { useState } from "react";
import { Select, Form, List, Col, Typography } from "antd";
import DefaultTitle from "../../../../components/atoms/default-title";
import ModalAddSkillForm from "./modal-add-skill-form";
import TagCustom from "../../../../components/atoms/tag-custom";

const { Option } = Select;

const EffectSkillForm = ({ existingEffects = [], restField, name }) => {
  const [selectedEffects, setSelectedEffects] = useState([]);

  const handleEffectSelect = (dataEffectForm) => {
    const selected = existingEffects.filter((effect) =>
      dataEffectForm.includes(effect._id)
    );
    setSelectedEffects(selected);
  };

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
          {existingEffects.map((effect) => (
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

      <ModalAddSkillForm />
    </div>
  );
};

export default EffectSkillForm;
