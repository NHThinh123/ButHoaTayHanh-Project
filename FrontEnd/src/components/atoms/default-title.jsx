const DefaultTitle = ({ children, color, style, fontSize }) => {
  return (
    <h2
      style={{
        color: color || "#000",

        fontSize: fontSize || 18,
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        fontWeight: 700,
        ...style,
      }}
    >
      {children}
    </h2>
  );
};
export default DefaultTitle;
