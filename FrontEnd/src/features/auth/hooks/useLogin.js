import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/auth.context";
import { loginApi } from "../services/loginApi";
import { notification } from "antd";

export const useLogin = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const onFinish = async (values) => {
    const { email, password } = values;
    const res = await loginApi(email, password);

    if (res && res.EC === 0) {
      localStorage.setItem("access_token", res.access_token);
      notification.success({
        message: "LOGIN USER",
        description: "success",
      });
      setAuth({
        isAuthentication: true,
        user: {
          email: res?.user?.email ?? "",
          role: res?.user?.role ?? "",
        },
      });
      navigate("/");
    } else {
      notification.error({
        message: "LOGIN USER",
        description: res?.EM ?? "error",
      });
    }
  };

  return { onFinish };
};
