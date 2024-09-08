import { Col, Image, Layout, notification, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";
import LoginForm from "../features/login/components/login-form";
import BentoBox from "../components/atoms/bento-box";
import LoginImg from "../assets/images/banner-login.png";
import { loginApi } from "../features/login/services/loginApi";

const LoginPage = () => {
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
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout
      style={{
        display: "flex",

        justifyContent: "center",
        overflow: "auto",
        alignItems: "center",
      }}
    >
      <BentoBox
        style={{
          width: "80%",
          alignSelf: "center",
          margin: "50px 0px",
          backgroundColor: "white",
        }}
      >
        <Row
          style={{
            flex: 1,
            alignSelf: "center",
            padding: "36px",
          }}
          justify={"center"}
          align={"middle"}
        >
          <Col span={14}>
            <div style={{ padding: "20px" }}>
              <Image preview={false} src={LoginImg}></Image>
            </div>
          </Col>
          <Col span={10}>
            <LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
          </Col>
        </Row>
      </BentoBox>
    </Layout>
  );
};

export default LoginPage;
