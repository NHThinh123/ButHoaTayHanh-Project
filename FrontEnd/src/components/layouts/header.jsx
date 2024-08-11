import { Button, Col, Flex, Row } from "antd";
import Logo from "../ui/logo";
import SearchBar from "../ui/search";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import UserInfo from "../ui/userInfo";

const Header = () => {
  const { auth } = useContext(AuthContext);
  return (
    <div>
      <Row>
        <Col
          span={6}
          style={{
            padding: "8px",
          }}
        >
          <Logo />
        </Col>
        <Col
          span={12}
          style={{
            padding: "8px",
          }}
        >
          <SearchBar />
        </Col>
        <Col
          span={6}
          style={{
            padding: "8px",
          }}
        >
          <Flex
            gap="small"
            align="center"
            justify="flex-end"
            style={{ height: "100%" }}
          >
            {!auth.isAuthentication ? (
              <>
                <Button type="primary">Đăng Nhập</Button>
                <Button>Đăng Ký</Button>
              </>
            ) : (
              <UserInfo />
            )}
          </Flex>
        </Col>
      </Row>
    </div>
  );
};
export default Header;
