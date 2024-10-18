import { Button, Col, Flex, Row } from "antd";

import { useContext } from "react";
import { AuthContext } from "../../contexts/auth.context";
import Logo from "../atoms/logo";

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
          zIndex: 3,
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
        {/* <Col
          md={12}
          sm={0}
          xs={0}
          style={{
            padding: "8px",
          }}
        >
          <SearchBar />
        </Col> */}
        <Col
          md={18}
          sm={18}
          xs={18}
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
                <Button type="primary" href="/login">
                  Đăng Nhập
                </Button>
                <Button href="/register">Đăng Ký</Button>
              </>
            ) : (
              <UserInfo auth={auth} />
            )}
          </Flex>
        </Col>
      </Row>
    </div>
  );
};
export default Header;
