import { paymentApi } from "../services/api";
import { Button, Form, Input } from "antd";

const PaymentPage = () => {
  const handleSubmit = async (values) => {
    const { amount } = values;

    try {
      const response = await paymentApi(amount);
      if (response.data.payUrl) {
        window.location.href = response.data.payUrl;
      } else {
        console.log("Error creating Momo payment", response.data);
      }
    } catch (error) {
      console.log("Error creating Momo payment", error);
    }
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      onFinish={handleSubmit}
      autoComplete="off"
    >
      <Form.Item
        label="Nhập số tiền"
        name="amount"
        rules={[
          {
            required: true,

            message: "Vui lòng nhập số tiền bạn muốn thanh toán",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Thanh toán
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PaymentPage;
