import { PlusOutlined } from "@ant-design/icons";
import { Button, ColorPicker, Form, Input, Modal, notification } from "antd";
import { useState } from "react";
import { createEffectApi } from "../../services/effectApi";

const ModalAddSkillForm = ({ onEffectAdded }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const handleModalOk = async () => {
    try {
      const values = await form.validateFields();
      const data = {
        nameEffect: values.nameEffect,
        descriptionEffect: values.descriptionEffect,
        colorEffect: values.colorEffect.toHexString(),
      };
      const res = await createEffectApi(data);

      if (res) {
        notification.success({
          message: "Thêm hiệu ứng",
          description: "Thành công",
        });
        onEffectAdded();
      } else {
        notification.error({
          message: "Thêm hiệu ứng",
          description: "Thất bại",
        });
      }
      console.log(data);
      setIsModalVisible(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div>
      <Button
        icon={<PlusOutlined />}
        onClick={showModal}
        style={{ marginBottom: 16 }}
        type="primary"
      >
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
            <ColorPicker defaultFormat="hex" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalAddSkillForm;
