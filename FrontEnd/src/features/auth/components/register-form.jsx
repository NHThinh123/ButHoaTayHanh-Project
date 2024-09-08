import { Divider, Form } from "antd";
import InputForm from "./input-form";
import BentoBox from "../../../components/atoms/bento-box";
import ButtonForm from "./button-form";
import CheckInputForm from "./check-input-form";
import { Link } from "react-router-dom";
import { useState } from "react";

export const RegisterForm = ({ onFinish, onFinishFailed, style }) => {
  const [policyAccepted, setPolicyAccepted] = useState(true);
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
      <h1 style={{ fontSize: 36 }}> Đăng Ký</h1>
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
            label="Tên người dùng"
            name="username"
            rules={[
              {
                required: true,
                type: "string",
                message: "Vui lòng nhập tên của bạn",
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
          <InputForm
            label="Xác nhận mật khẩu"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Vui lòng xác nhận lại mật khẩu",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Mật khẩu không khớp!"));
                },
              }),
            ]}
            inputType="password"
          />

          <CheckInputForm
            name={"policy"}
            valuePropName={"checked"}
            onChange={(e) => {
              setPolicyAccepted(e.target.checked);
            }}
          >
            Tôi đồng ý và chấp nhận với
            <Link> Điều khoản dịch vụ</Link> và
            <Link> Chính sách bảo mật</Link>
          </CheckInputForm>
          <ButtonForm disable={!policyAccepted}>Đăng Ký</ButtonForm>
          <Divider />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>
              Bạn đã có tài khoản?{" "}
              <Link to={"/login"}> Đăng Nhập Ngay!!!!</Link>
            </p>
          </div>
        </Form>
      </BentoBox>
    </div>
  );
};

export default RegisterForm;
