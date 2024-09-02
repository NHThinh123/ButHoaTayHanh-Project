import { Image } from "antd";

//import Img from "../../assets/images/banner.webp";
const Banner = (props) => {
  const { imgUrl, title, content } = props;

  return (
    <div
      style={{
        minWidth: "200px",
        maxWidth: "1200px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <Image
        src={imgUrl}
        preview={false}
        style={{
          objectFit: "cover", // Thay đổi thành cover
          width: "100%",
          minHeight: "420px",
        }}
      />
      <div
        style={{
          width: "100%",
          height: "25%",
          position: "absolute",
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          padding: "10px",
        }}
      >
        <h2
          style={{
            fontSize: 18,
            color: "white",
            width: "90%",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </h2>
        <h1></h1>
        <p
          style={{
            fontSize: 14,
            overflow: "hidden",
            width: "80%",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {content}
        </p>
      </div>
    </div>
  );
};
export default Banner;
