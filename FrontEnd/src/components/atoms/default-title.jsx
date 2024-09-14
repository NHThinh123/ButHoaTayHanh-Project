import { Typography } from "antd";

const DefaultTitle = ({ children, color, style }) => {
  return (
    <Typography.Text
      style={{
        color: color || "#000",
        fontSize: 18,
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        fontWeight: 700,
        ...style,
      }}
    >
      {children}
    </Typography.Text>
  );
};
export default DefaultTitle;
