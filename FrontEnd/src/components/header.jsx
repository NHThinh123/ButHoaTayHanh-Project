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
import { AuthContext } from "./context/auth.context";
const Header = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);
  console.log(auth);

  const items = [
    {
      key: "home",
      label: <Link to={"/"}>Home</Link>,
      icon: <HomeOutlined />,
    },
    {
      key: "sub2",
      label: "Character",
      icon: <TeamOutlined />,
      children: [
        {
          key: "allCharacter",
          label: "All",
        },
        {
          key: "tien",
          label: "Tiên giới",
        },
        {
          key: "nhan",
          label: "Nhân giới",
        },
        {
          key: "yeu",
          label: "Yêu giới",
        },
        {
          key: "thanh",
          label: "Thánh giới",
        },
        {
          key: "ma",
          label: "Ma Giới",
        },
      ],
    },
    {
      type: "divider",
    },
    {
      key: "sub4",
      label: "Guide",
      icon: <CommentOutlined />,
      children: [
        {
          key: "Guide1",
          label: "Bước chuẩn bị",
        },
        {
          key: "Guide2",
          label: "Quản lý tài nguyên",
        },
        {
          key: "Guide3",
          label: "Bảy ngày tân thủ",
        },
        {
          key: "Guide4",
          label: "Đội hình đề cử",
        },
      ],
    },
    {
      key: "grp",
      label: "Group",
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
          label: "User",
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
    <Menu
      onClick={onClick}
      style={{
        width: 320,
      }}
      defaultSelectedKeys={["home"]}
      defaultOpenKeys={["sub2"]}
      mode="inline"
      items={items}
    />
  );
};
export default Header;
