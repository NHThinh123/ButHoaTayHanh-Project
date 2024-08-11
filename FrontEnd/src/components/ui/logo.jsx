import { Flex, Image } from "antd";
import LogoImg from "../../assets/images/LogoButHoaTayHanh.png";
import { Link } from "react-router-dom";

const Logo = () => (
  <Flex gap="small" align="center" justify="center" style={{ height: "100%" }}>
    <Link to="/">
      <Image width={200} src={LogoImg} preview={false} />
    </Link>
  </Flex>
);

export default Logo;
