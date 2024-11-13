import { Tag } from "antd";

const TagCustom = ({ children, color, padding, style }) => {
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
        ...style,
      }}
    >
      {children}
    </Tag>
  );
};

export default TagCustom;
