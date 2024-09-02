const BentoBox = ({ children, height, backgroundColor, style }) => (
  <div
    style={{
      backgroundColor: backgroundColor,
      height: height,
      // padding: 8,
      margin: 8,
      borderRadius: 10,
      ...style,
    }}
  >
    {children}
  </div>
);

BentoBox.defaultProps = {
  //backgroundColor: "red",
};

export default BentoBox;
