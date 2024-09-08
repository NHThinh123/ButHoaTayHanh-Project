const BentoBox = ({ children, height, backgroundColor, style }) => (
  <div
    style={{
      backgroundColor: backgroundColor,
      height: height,
      // padding: 8,
      margin: "8px 4px",
      borderRadius: 10,
      overflow: "hidden",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      ...style,
    }}
  >
    {children}
  </div>
);

BentoBox.defaultProps = {
  // backgroundColor: "red",
};

export default BentoBox;
