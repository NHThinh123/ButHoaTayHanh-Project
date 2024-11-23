import {
  HomeOutlined,
  CommentOutlined,
  TeamOutlined,
  SettingOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";
const Sider = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);

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
          label: <Link to={"/character/create"}>Thêm tướng</Link>,
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
          label: <Link to={"/topic/me"}>Bài viết của tôi</Link>,
        },
        {
          key: "createTopic",
          label: <Link to={"/topic/create"}>Thêm bài viết</Link>,
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
                  {
                    key: "listUser",
                    label: <Link to={"/user"}>Danh sách user</Link>,
                  },
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
                  {
                    key: "payment",
                    label: <Link to={"/payment"}>Thanh toán</Link>,
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
    </div>
  );
};
export default Sider;
