import { Form } from "antd";
import { useState } from "react";

const useTopicForm = () => {
  const [form] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const [subContents, setSubContents] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [modalForm] = Form.useForm();
  const showModal = () => {
    setModalVisible(true);
    modalForm.resetFields();
  };

  const handleModalOk = () => {
    modalForm.validateFields().then((values) => {
      const newContent = {
        sections: {
          title: values.includeTitle,
          content: values.includeContent,
          image: values.includeImage,
        },
        data: {},
      };

      if (editingIndex !== null) {
        // Lấy dữ liệu hiện tại của section đang edit
        const currentContent = subContents[editingIndex];

        // Chỉ giữ lại dữ liệu của các trường được chọn
        if (values.includeTitle && currentContent.data.title) {
          newContent.data.title = currentContent.data.title;
        }
        if (values.includeContent && currentContent.data.content) {
          newContent.data.content = currentContent.data.content;
        }
        if (values.includeImage && currentContent.data.imageUrl) {
          newContent.data.imageUrl = currentContent.data.imageUrl;
        }

        const updatedContents = [...subContents];
        updatedContents[editingIndex] = newContent;
        setSubContents(updatedContents);

        // Cập nhật form values để phản ánh thay đổi
        const formValues = form.getFieldValue("subContents") || [];
        formValues[editingIndex] = newContent.data;
        form.setFieldValue("subContents", formValues);

        setEditingIndex(null);
      } else {
        setSubContents([...subContents, newContent]);
      }

      setModalVisible(false);
      modalForm.resetFields();
    });
  };

  const handleDelete = (index) => {
    const newSubContents = subContents.filter((_, i) => i !== index);
    setSubContents(newSubContents);

    // Cập nhật form values khi xóa
    const formValues = form.getFieldValue("subContents") || [];
    formValues.splice(index, 1);
    form.setFieldValue("subContents", formValues);
  };

  const handleEdit = (index) => {
    const content = subContents[index];
    modalForm.setFieldsValue({
      includeTitle: content.sections.title,
      includeContent: content.sections.content,
      includeImage: content.sections.image,
    });
    setEditingIndex(index);
    setModalVisible(true);
  };

  // Theo dõi sự thay đổi của form fields
  const handleFieldChange = (index, field, value) => {
    const updatedContents = [...subContents];
    updatedContents[index].data[field] = value;
    setSubContents(updatedContents);
  };

  const category = [
    { value: "", label: "Tất cả" },
    { value: "Thảo luận", label: "Thảo luận" },
    { value: "Chiến lược", label: "Chiến lược" },
    { value: "Sự kiện", label: "Sự kiện" },
    { value: "Bảo trì", label: "Bảo trì" },
    { value: "Thông báo", label: "Thông báo" },
    { value: "Chia sẻ thành tích", label: "Chia sẻ thành tích" },
  ];
  const onFinish = async (values) => {
    console.log(values);
  };
  return {
    onFinish,
    showModal,
    handleModalOk,
    handleDelete,
    handleEdit,
    handleFieldChange,
    category,
    form,
    modalVisible,
    subContents,
    modalForm,
    editingIndex,
    setModalVisible,
    setEditingIndex,
  };
};

export default useTopicForm;
