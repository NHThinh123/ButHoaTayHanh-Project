import { Carousel } from "antd";
import Banner from "./banner";

const BannerList = ({ bannerData }) => {
  return (
    <Carousel
      arrows
      autoplay
      infinite={true}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      {bannerData.map((banner, index) => (
        <Banner
          key={index}
          imgUrl={banner.image}
          title={banner.title}
          content={banner.description}
        />
      ))}
    </Carousel>
  );
};
export default BannerList;
