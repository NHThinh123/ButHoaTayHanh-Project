import { useNavigate } from "react-router-dom";
import { createUserApi } from "../services/registerApi";
import { notification } from "antd";

export const useRegister = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { email, username, password } = values;
    const res = await createUserApi(email, username, password);

    if (res) {
      notification.success({
        message: "CREATE USER",
        description: "success",
      });
      navigate("/login");
    } else {
      notification.error({
        message: "CREATE USER",
        description: "error",
      });
    }
  };
  return { onFinish };
};
