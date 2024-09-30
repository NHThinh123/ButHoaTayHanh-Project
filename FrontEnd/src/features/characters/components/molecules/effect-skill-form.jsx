import { useState } from "react";
import { Select, Tag, Button, Modal, Form, Input, ColorPicker } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

const EffectSkillForm = ({ existingEffects = [] }) => {
  const [selectedEffects, setSelectedEffects] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleEffectSelect = (effectId) => {
    const newEffect = existingEffects.find((effect) => effect._id === effectId);
    if (newEffect && !selectedEffects.some((e) => e._id === effectId)) {
      const updatedEffects = [...selectedEffects, newEffect];
      setSelectedEffects(updatedEffects);
    }
  };

  const handleEffectRemove = (effectId) => {
    const updatedEffects = selectedEffects.filter(
      (effect) => effect._id !== effectId
    );
    setSelectedEffects(updatedEffects);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    form.validateFields().then((values) => {
      const newEffect = {
        _id: Date.now().toString(), // Temporary ID
        nameEffect: values.nameEffect,
        descriptionEffect: values.descriptionEffect,
        colorEffect: values.colorEffect.toHexString(),
      };
      const updatedEffects = [...selectedEffects, newEffect];
      setSelectedEffects(updatedEffects);
      setIsModalVisible(false);
      form.resetFields();
    });
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  return (
    <div>
      <Select
        style={{ width: "100%", marginBottom: 16 }}
        placeholder="Chọn hiệu ứng"
        onChange={handleEffectSelect}
      >
        {existingEffects.map((effect) => (
          <Option key={effect._id} value={effect._id}>
            {effect.nameEffect}
          </Option>
        ))}
      </Select>

      <div style={{ marginBottom: 16 }}>
        {selectedEffects.map((effect) => (
          <Tag
            key={effect._id}
            closable
            onClose={() => handleEffectRemove(effect._id)}
            color={effect.colorEffect}
            style={{ marginBottom: 8 }}
          >
            {effect.nameEffect}
          </Tag>
        ))}
      </div>

      <Button icon={<PlusOutlined />} onClick={showModal}>
        Thêm hiệu ứng mới
      </Button>

      <Modal
        title="Thêm hiệu ứng mới"
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="nameEffect"
            label="Tên hiệu ứng"
            rules={[{ required: true, message: "Vui lòng nhập tên hiệu ứng" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="descriptionEffect"
            label="Mô tả hiệu ứng"
            rules={[
              { required: true, message: "Vui lòng nhập mô tả hiệu ứng" },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="colorEffect"
            label="Màu hiệu ứng"
            rules={[{ required: true, message: "Vui lòng chọn màu hiệu ứng" }]}
          >
            <ColorPicker />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default EffectSkillForm;
