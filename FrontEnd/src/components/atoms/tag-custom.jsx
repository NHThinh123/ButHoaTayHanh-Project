import { Tag } from "antd";

const TagCustom = ({ children, color, padding }) => {
  return (
    <Tag
      color={color}
      bordered
      style={{
        fontSize: 16,
        minWidth: 50,
        textAlign: "center",
        fontWeight: "700",
        padding: padding,
      }}
    >
      {children}
    </Tag>
  );
};

export default TagCustom;
