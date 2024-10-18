import { Avatar, Flex } from "antd";

const UserInfo = ({ auth }) => {
  return (
    <Flex
      gap="middle"
      align="center"
      justify="flex-end"
      style={{ height: "100%" }}
    >
      <p style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}>
        {" "}
        {auth.user.username}
      </p>

      <Avatar
        size={40}
        style={{
          backgroundColor: "#fde3cf",
          color: "#f56a00",
        }}
      >
        {auth?.user?.username?.charAt(0).toUpperCase() ?? "U"}
      </Avatar>
    </Flex>
  );
};
export default UserInfo;
