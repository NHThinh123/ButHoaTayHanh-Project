import { Carousel } from "antd";
import Banner from "../../../components/molecules/banner";

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
