import { Col, Image, Layout, Row } from "antd";
import BentoBox from "../components/atoms/bento-box";
import RegisterImg from "../assets/images/banner-register.png";
import RegisterForm from "../features/auth/components/register-form";
import { useRegister } from "../features/auth/hooks/useRegister";

const RegisterPage = () => {
  const { onFinish } = useRegister();
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
              <Image preview={false} src={RegisterImg}></Image>
            </div>
          </Col>
          <Col span={10}>
            <RegisterForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
          </Col>
        </Row>
      </BentoBox>
    </Layout>
  );
};

export default RegisterPage;
