import { Form, message } from "antd";
import { useState } from "react";
import {
  createCharacterApi,
  updateCharacterApi,
} from "../services/characterApi";
import { useNavigate } from "react-router-dom";

const useCharacterForm = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [modalData, setModalData] = useState({ visible: false, index: null });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      const data = {
        name: values.name,
        rarity: values.rarity,
        role: values.role,
        faction: values.faction,
        story: values.story,
        PveScore: values.PveScore,
        PvpScore: values.PvpScore,
        skills: values.skills,
      };

      if (fileList[0]) {
        const imageFile = fileList[0].originFileObj;
        data.image = imageFile;
      }

      const res = await createCharacterApi(data);

      if (res) {
        message.success("Tạo nhân vật thành công");
        form.resetFields();
        setFileList([]);
        navigate("/character");
      }
    } catch (error) {
      message.error("Tạo nhân vật thất bại");
    } finally {
      setIsLoading(false);
    }
  };
  const onChangeData = async (values, id) => {
    setIsLoading(true);
    try {
      const data = {
        name: values.name,
        rarity: values.rarity,
        role: values.role,
        faction: values.faction,
        story: values.story,
        PveScore: values.PveScore,
        PvpScore: values.PvpScore,
        skills: values.skills,
      };

      if (fileList[0]) {
        const imageFile = fileList[0].originFileObj;
        data.image = imageFile;
      }

      const res = await updateCharacterApi(id, data);
      console.log(res);
      if (res) {
        message.success("Chỉnh sửa nhân vật thành công");

        setFileList([]);
        navigate("/character");
      }
    } catch (error) {
      message.error("Tạo nhân vật thất bại");
    } finally {
      setIsLoading(false);
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
    isLoading,
    onChangeData,
  };
};

export default useCharacterForm;
