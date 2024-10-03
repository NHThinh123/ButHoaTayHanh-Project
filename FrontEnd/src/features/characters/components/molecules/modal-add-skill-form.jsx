import { ColorPicker, Form, Input, Modal } from "antd";

const ModalAddSkillForm = ({ setIsModalVisible, isModalVisible }) => {
  const [form] = Form.useForm();
  const handleModalOk = () => {
    // form.validateFields().then((values) => {
    //   const newEffect = {
    //     _id: Date.now().toString(), // Temporary ID
    //     nameEffect: values.nameEffect,
    //     descriptionEffect: values.descriptionEffect,
    //     colorEffect: values.colorEffect.toHexString(),
    //   };
    //   const updatedEffects = [...selectedEffects, newEffect];
    //   setSelectedEffects(updatedEffects);
    //   setIsModalVisible(false);
    //   form.resetFields();
    // });
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };
  return (
    <Modal
      title="Thêm hiệu ứng mới"
      open={isModalVisible}
      onOk={handleModalOk}
      onCancel={handleModalCancel}
    >
      <Form layout="vertical">
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
          rules={[{ required: true, message: "Vui lòng nhập mô tả hiệu ứng" }]}
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
  );
};

export default ModalAddSkillForm;
