import { Typography } from "antd";

const DefaultText = ({ children, style }) => {
  return (
    <Typography.Text
      style={{
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </Typography.Text>
  );
};
export default DefaultText;
