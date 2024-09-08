import { Col, Image, Layout, Row } from "antd";
import LoginForm from "../features/auth/components/login-form";
import BentoBox from "../components/atoms/bento-box";
import LoginImg from "../assets/images/banner-login.png";
import { useLogin } from "../features/auth/hooks/useLogin";

const LoginPage = () => {
  const { onFinish } = useLogin();

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
