import { Avatar, Flex } from "antd";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const UserInfo = () => {
  const { auth } = useContext(AuthContext);
  return (
    <Flex
      gap="middle"
      align="center"
      justify="flex-end"
      style={{ height: "100%" }}
    >
      <p style={{ color: "white", fontSize: "16px", fontWeight: "bold" }}>
        {" "}
        {auth.user.email}
      </p>

      <Avatar
        size={40}
        style={{
          backgroundColor: "#fde3cf",
          color: "#f56a00",
        }}
      >
        {auth?.user?.email.charAt(0).toUpperCase() ?? "U"}
      </Avatar>
    </Flex>
  );
};
export default UserInfo;
