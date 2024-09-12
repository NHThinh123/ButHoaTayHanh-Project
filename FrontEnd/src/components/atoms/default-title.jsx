import { Typography } from "antd";

const DefaultTitle = ({ children, style }) => {
  return (
    <Typography.Text
      style={{
        fontSize: 16,
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
