import { PlusOutlined } from "@ant-design/icons";
import { Button, ColorPicker, Form, Input, Modal } from "antd";

const ModalAddSkillForm = ({
  showAddEffectModal,
  handleAddEffectModalCancel,
  handleAddEffectModalOk,
  isModalAddEffectVisible,
  formEffect,
}) => {
  return (
    <div>
      <Button
        icon={<PlusOutlined />}
        onClick={showAddEffectModal}
        style={{ marginBottom: 16 }}
        type="primary"
      >
        Thêm hiệu ứng mới
      </Button>
      <Modal
        title="Thêm hiệu ứng mới"
        open={isModalAddEffectVisible}
        onOk={handleAddEffectModalOk}
        onCancel={handleAddEffectModalCancel}
      >
        <Form form={formEffect} layout="vertical">
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
