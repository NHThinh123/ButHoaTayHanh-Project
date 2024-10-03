import { useState } from "react";
import { Select, Button, Form, List, Space, Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import DefaultTitle from "../../../../components/atoms/default-title";
import ModalAddSkillForm from "./modal-add-skill-form";
import TagCustom from "../../../../components/atoms/tag-custom";
import DefaultText from "../../../../components/atoms/default-text";

const { Option } = Select;

const EffectSkillForm = ({ existingEffects = [], restField, name }) => {
  const [selectedEffects, setSelectedEffects] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleEffectSelect = (dataEffectForm) => {
    const selected = existingEffects.filter((effect) =>
      dataEffectForm.includes(effect._id)
    );
    setSelectedEffects(selected);
  };

  const showModal = () => {
    setIsModalVisible(true);
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
          style={{ width: "100%", marginBottom: 16 }}
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

      <div style={{ marginBottom: 16 }}>
        <List
          grid={{
            gutter: 16,
          }}
          dataSource={selectedEffects}
          renderItem={(item) => (
            <List.Item>
              <Row>
                <Col span={24}>
                  <Space style={{ display: "flex", alignItems: "flex-start" }}>
                    <TagCustom color={item.colorEffect} padding={5}>
                      {`${item.nameEffect} :`}
                    </TagCustom>
                    <DefaultText>{item.descriptionEffect}</DefaultText>
                  </Space>
                </Col>
              </Row>
            </List.Item>
          )}
        />
      </div>
      <Button icon={<PlusOutlined />} onClick={showModal}>
        Thêm hiệu ứng mới
      </Button>
      <ModalAddSkillForm
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
      />
    </div>
  );
};

export default EffectSkillForm;
