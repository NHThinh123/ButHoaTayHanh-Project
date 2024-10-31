import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, ColorPicker, Form, Input, Modal, Typography } from "antd";
import { useState } from "react";
import TagCustom from "../../../../components/atoms/tag-custom";

const ModalAddSkillForm = ({
  showAddEffectModal,
  handleAddEffectModalCancel,
  handleAddEffectModalOk,
  isModalAddEffectVisible,
  formEffect,
}) => {
  const [previewData, setPreviewData] = useState({});
  const handleFormChange = (changedValues, allValues) => {
    setPreviewData(allValues);
  };
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
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
        <Form
          form={formEffect}
          layout="vertical"
          onValuesChange={handleFormChange}
        >
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
        <div style={{ marginBottom: 16 }}>
          {previewData.nameEffect &&
            previewData.descriptionEffect &&
            previewData.colorEffect && (
              <Col span={24}>
                <Typography.Text style={{ fontSize: 16, width: "100%" }}>
                  <TagCustom color={previewData?.colorEffect?.toHexString()}>
                    {`${capitalizeFirstLetter(previewData.nameEffect)} :`}
                  </TagCustom>
                  {previewData.descriptionEffect}
                </Typography.Text>
              </Col>
            )}
        </div>
      </Modal>
    </div>
  );
};

export default ModalAddSkillForm;
