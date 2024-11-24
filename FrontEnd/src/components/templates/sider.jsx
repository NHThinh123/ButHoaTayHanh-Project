import {
  HomeOutlined,
  CommentOutlined,
  TeamOutlined,
  SettingOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";

import LoginRequiredModal from "../atoms/login-modal-required";

const Sider = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [redirectPath, setRedirectPath] = useState("");

  const showLoginModal = (path) => {
    setRedirectPath(path);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    navigate("/login");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const items = [
    {
      key: "home",
      label: <Link to={"/"}>Trang Chủ</Link>,
      icon: <HomeOutlined />,
    },
    {
      key: "sub2",
      label: "Thông Tin Tướng",
      icon: <TeamOutlined />,
      children: [
        {
          key: "allCharacter",
          label: <Link to={"/character"}>Danh sách tướng</Link>,
        },
        {
          key: "createCharacter",
          label: auth.isAuthentication ? (
            <Link to={"/character/create"}>Thêm tướng</Link>
          ) : (
            <span onClick={() => showLoginModal("/character/create")}>
              Thêm tướng
            </span>
          ),
        },
      ],
    },
    {
      type: "divider",
    },
    {
      key: "sub4",
      label: "Bài viết",
      icon: <CommentOutlined />,
      children: [
        {
          key: "allTopic",
          label: <Link to={"/topic"}>Quản lý bài viết</Link>,
        },
        {
          key: "myTopic",
          label: auth.isAuthentication ? (
            <Link to={"/topic/me"}>Bài viết của tôi</Link>
          ) : (
            <span onClick={() => showLoginModal("/topic/me")}>
              Bài viết của tôi
            </span>
          ),
        },
        {
          key: "createTopic",
          label: auth.isAuthentication ? (
            <Link to={"/topic/create"}>Thêm bài viết</Link>
          ) : (
            <span onClick={() => showLoginModal("/topic/create")}>
              Thêm bài viết
            </span>
          ),
        },
      ],
    },
    {
      key: "grp",
      label: "Nhóm",
      type: "group",
      children: [
        {
          key: "setting",
          icon: <SettingOutlined />,
          label: "Setting",
        },
        {
          key: "user",
          icon: <MenuOutlined />,
          label: "Người Dùng",
          children: [
            ...(auth.isAuthentication
              ? [
                  ...(auth.user.role === "admin"
                    ? [
                        {
                          key: "listUser",
                          label: <Link to={"/user"}>Danh sách user</Link>,
                        },
                      ]
                    : []),
                  {
                    key: "logout",
                    label: (
                      <span
                        onClick={() => {
                          localStorage.clear("access_token");
                          navigate("/");
                          setAuth({
                            isAuthentication: false,
                            user: {
                              email: "",
                              role: "",
                            },
                          });
                        }}
                      >
                        Đăng Xuất
                      </span>
                    ),
                  },
                ]
              : [
                  {
                    key: "login",
                    label: <Link to={"/login"}>Đăng nhập</Link>,
                  },
                  {
                    key: "register",
                    label: <Link to={"/register"}>Đăng Ký</Link>,
                  },
                ]),
          ],
        },
      ],
    },
  ];

  const onClick = (e) => {
    console.log("click ", e);
  };

  return (
    <div
      style={{
        scrollbarWidth: "none",
        height: "100vh",
        paddingBottom: 100,
        overflow: "auto",
      }}
    >
      <Menu
        onClick={onClick}
        defaultSelectedKeys={["home"]}
        defaultOpenKeys={["sub2", "sub4", "user"]}
        mode="inline"
        items={items}
        style={{
          width: "16%",
          height: "100vh",
          overflow: "auto",
          position: "fixed",
          insetInlineStart: 0,
          scrollbarWidth: "none",
          paddingBottom: 100,
        }}
      />
      <LoginRequiredModal
        isVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default Sider;
