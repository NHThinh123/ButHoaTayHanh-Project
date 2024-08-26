import { Button, Col, Flex, Row } from "antd";

import { useContext } from "react";
import { AuthContext } from "../../contexts/auth.context";
import Logo from "../atoms/logo";
import SearchBar from "../molecules/search";
import UserInfo from "../molecules/userInfo";

const Header = () => {
  const { auth } = useContext(AuthContext);
  return (
    <div>
      <Row
        style={{
          width: "100%",
          backgroundColor: "white",
          overflow: "auto",
          position: "fixed",
          zIndex: 1,
        }}
      >
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
