import { Form, message } from "antd";
import { useState } from "react";

import { createCharacterApi } from "../services/characterApi";

const useCharacterForm = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [modalData, setModalData] = useState({ visible: false, index: null });

  const onFinish = async (values) => {
    try {
      const data = {
        name: values.name,
        rarity: values.rarity,
        role: values.role,
        faction: values.faction,
        story: values.story,
        PveScore: values.pveScore,
        PvpScore: values.pvpScore,
        skills: values.skills,
      };
      if (fileList[0]) {
        const imageFile = fileList[0].originFileObj;
        data.image = imageFile;
      }
      const res = await createCharacterApi(data);

      if (res) {
        message.success("Character created successfully");
        form.resetFields();
        console.log(res);
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
