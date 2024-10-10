import {
  CopyrightOutlined,
  FacebookOutlined,
  MailOutlined,
  PhoneOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Space } from "antd";
import BentoBox from "../atoms/bento-box";

const Footer = () => {
  return (
    <BentoBox padding={28} style={{ width: "95%" }}>
      <h2>Về chúng tôi </h2>
      <br />
      <p>
        Chúng tôi là một cộng đồng game thủ nhiệt huyết, luôn sẵn sàng chia sẻ
        đam mê với mọi người. Chúng tôi mang đến những tựa game hay nhất thế
        giới đến với game thủ Việt. Với đội ngũ dịch thuật chuyên nghiệp, chúng
        tôi cam kết mang lại những trải nghiệm chơi game mượt mà và thú vị nhất.
      </p>
      <br />
      <h2>Liên hệ</h2>
      <div>
        <br />
        <Space>
          <PhoneOutlined /> <p>(+84) 70 686 4817</p>
        </Space>
        <br />
        <br />
        <Space>
          <MailOutlined /> thinhdragon4123@gmail.com
        </Space>
      </div>
      <br />
      <h2>Liên kết</h2>
      <br />
      <Space>
        <a href="https://www.facebook.com">
          <FacebookOutlined /> Facebook
        </a>
      </Space>
      <br />
      <br />
      <Space>
        <a href="https://www.youtube.com/@kaff2511" style={{ color: "red" }}>
          <YoutubeOutlined /> Youtube
        </a>
      </Space>
      <br />
      <br />
      <br />
      <div style={{ color: "grey" }}>
        <CopyrightOutlined /> 2024 Copyright: KAFF Gaming
      </div>
    </BentoBox>
  );
};
export default Footer;
