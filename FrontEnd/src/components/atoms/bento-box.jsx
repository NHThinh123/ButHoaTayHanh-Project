const BentoBox = ({
  children,
  height,
  minHeight,
  maxHeight,
  backgroundColor,
  style,
  padding,
}) => (
  <div
    style={{
      backgroundColor: backgroundColor,
      height: height,
      minWidth: 200,
      minHeight: minHeight,
      maxHeight: maxHeight,
      padding: padding,
      margin: "8px 8px",
      borderRadius: 10,
      overflow: "hidden",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      ...style,
    }}
  >
    {children}
  </div>
);

export default BentoBox;
