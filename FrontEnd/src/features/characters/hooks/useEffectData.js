import { useCallback, useEffect, useState } from "react";
import { createEffectApi, getEffectApi } from "../services/effectApi";
import { Form, notification } from "antd";

const useEffectData = () => {
  const [effectData, setEffectData] = useState([]);

  const fetchEffect = useCallback(async () => {
    try {
      const res = await getEffectApi();
      if (res) {
        setEffectData(res);
      }
    } catch (error) {
      console.error("Error fetching effect:", error);
    }
  }, []);

  const [isModalAddEffectVisible, setIsModalAddEffectVisible] = useState(false);
  const [formEffect] = Form.useForm();
  const handleAddEffectModalOk = async () => {
    try {
      const values = await formEffect.validateFields();
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
      } else {
        notification.error({
          message: "Thêm hiệu ứng",
          description: "Thất bại",
        });
      }
      fetchEffect();

      setIsModalAddEffectVisible(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddEffectModalCancel = () => {
    setIsModalAddEffectVisible(false);
    formEffect.resetFields();
  };
  const showAddEffectModal = () => {
    setIsModalAddEffectVisible(true);
  };

  useEffect(() => {
    fetchEffect();
  }, [fetchEffect]);

  return {
    effectData,
    formEffect,

    showAddEffectModal,
    handleAddEffectModalCancel,
    handleAddEffectModalOk,
    isModalAddEffectVisible,
  };
};

export default useEffectData;
