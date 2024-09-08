import { Divider, Form } from "antd";
import InputForm from "./input-form";
import BentoBox from "../../../components/atoms/bento-box";
import ButtonForm from "./button-form";
import { Link } from "react-router-dom";

export const LoginForm = ({ onFinish, onFinishFailed, style }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
      }}
    >
      <h1 style={{ fontSize: 36 }}> Đăng Nhập</h1>
      <BentoBox style={{ padding: 30, margin: 8 }}>
        <Form
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          style={{ width: "100%", ...style }}
          initialValues={{ policy: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
        >
          <InputForm
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập email của bạn",
              },
              {
                type: "email",
                message: "Email không hợp lệ, vui lòng kiểm tra lại!",
              },
            ]}
          />
          <InputForm
            label="Mật khẩu"
            name="password"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu",
              },
              {
                min: 6,
                message: "Mật khẩu phải có ít nhất 6 ký tự",
              },
            ]}
            inputType="password"
          />
          <Link>Quên mật khẩu?</Link>

          <ButtonForm>Đăng Nhập</ButtonForm>
          <Divider />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>
              Bạn chưa có tài khoản?{" "}
              <Link to={"/register"}> Đăng Ký Ngay!!!!</Link>
            </p>
          </div>
        </Form>
      </BentoBox>
    </div>
  );
};

export default LoginForm;
