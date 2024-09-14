import DefaultTitle from "./default-title";

const CardText = ({ children, fontSize, style }) => {
  return (
    <div
      style={{
        fontWeight: "700",
        width: "100%",
        textAlign: "center",
        // margin: "10px 0px 20px 0px",
        ...style,
      }}
    >
      <DefaultTitle style={{ fontSize: fontSize, color: "white" }}>
        {children}
      </DefaultTitle>
    </div>
  );
};
export default CardText;
