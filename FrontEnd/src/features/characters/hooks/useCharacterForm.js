import { Form, message } from "antd";
import { useState } from "react";
import axios from "../../../services/axios.customize";

const useCharacterForm = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [modalData, setModalData] = useState({ visible: false, index: null });
  const onFinish = async (values) => {
    try {
      console.log(values);

      const data = {
        name: values.name,
        rarity: values.rarity,
        role: values.role,
        faction: values.faction,
        story: values.story,
        pveScore: values.pveScore,
        pvpScore: values.pvpScore,
        skills: values.skills,
      };
      if (fileList[0]) {
        const imageFile = fileList[0].originFileObj;
        data.image = imageFile; // Hoặc xử lý theo cách khác nếu cần
      }
      const res = await axios.post("/api/character", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (res) {
        message.success("Character created successfully");
        form.resetFields();

        setFileList([]);
      }
    } catch (error) {
      message.error("Failed to create character");
    }
  };

  const handleDeleteSkill = (index, fieldsLength) => {
    if (fieldsLength <= 1) {
      message.warning("Không thể xóa kỹ năng, phải có ít nhất 1 kỹ năng.");
      return;
    }
    setModalData({ visible: true, index });
  };

  const confirmDelete = (remove) => {
    remove(modalData.index);
    setModalData({ visible: false, index: null });
  };

  return {
    onFinish,
    fileList,
    setFileList,
    form,
    modalData,
    setModalData,
    handleDeleteSkill,
    confirmDelete,
  };
};

export default useCharacterForm;
