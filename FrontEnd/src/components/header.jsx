import {
  HomeOutlined,
  CommentOutlined,
  TeamOutlined,
  SettingOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
const Header = () => {
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
          key: "1",
          label: "All",
        },
        {
          key: "2",
          label: "Tiên giới",
        },
        {
          key: "3",
          label: "Nhân giới",
        },
        {
          key: "4",
          label: "Yêu giới",
        },
        {
          key: "5",
          label: "Thánh giới",
        },
        {
          key: "6",
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
          key: "1",
          label: "Bước chuẩn bị",
        },
        {
          key: "2",
          label: "Quản lý tài nguyên",
        },
        {
          key: "3",
          label: "Bảy ngày tân thủ",
        },
        {
          key: "4",
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
          key: "1",
          icon: <SettingOutlined />,
          label: "Setting",
        },
        {
          key: "register",
          icon: <MenuOutlined />,
          label: "Register",
        },
        {
          key: "user",
          icon: <MenuOutlined />,
          label: <Link to={"/user"}>User</Link>,
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
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};
export default Header;
