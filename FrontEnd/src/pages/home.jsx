import { Carousel, Col, Image, Row } from "antd";
import bannerImg from "../assets/images/banner.webp";

const HomePage = () => {
  const bannerData = [
    {
      title:
        "Ra mắt trang phục cặp đôi của Thiên Bồng Đại Nguyên Soái và Cao Thúy Lan, bạn đã sẵn sàng để sở hữu chưa!!!!",
      description:
        "Ra mắt trang phục cặp đôi của Thiên Bồng Đại Nguyên Soái và Cao Thúy Lan, bạn đã sẵn sàng để sở hữu chưa",
      image: bannerImg,
    },
    {
      title: "Banner 2",
      description: "This is banner 2",
      image:
        "https://iforum-cn2.c.hihonor.com/cn/cn_data/images/13001/2024/8/7/68f8cf37-db69-453f-86c5-7899c0c4f1fd.jpg?imageId=161574",
    },
    {
      title: "Banner 3",
      description: "This is banner 3",
      image:
        "https://www.iwanboy.com/upload/image/20240719/afca5feec1484424b3767b8c5b896f14.png",
    },
    {
      title: "Banner 4",
      description: "This is banner 4",
      image:
        "https://and-static.ghzs.com/image/article/crawl/2024/06/24/6679765a8cc904c7cf053687.jpg?x-oss-process=image/format,webp",
    },
    {
      title: "Banner 4",
      description: "This is banner 4",
      image:
        "http://i.17173cdn.com/2fhnvk/YWxqaGBf/cms3/wwYCspbrFvyjnEn.jpg!a-3-540x.jpg",
    },
  ];
  return (
    <Row>
      <Col span={16} style={{ padding: "0px 10px" }}>
        <Carousel
          arrows
          infinite={true}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {bannerData.map((banner, index) => (
            <div key={index}>
              <Image
                src={banner.image}
                preview={false}
                alt={banner.title || "Hình ảnh banner"}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  position: "relative",
                  marginLeft: -1,
                }}
              ></Image>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  background: "rgba(0,0,0,0.5)",
                  color: "white",
                  padding: "10px",
                  width: "100%",
                  paddingBottom: "20px",
                }}
              >
                <h2
                  style={{
                    fontSize: 18,
                    color: "white",
                    width: "9%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {banner.title}
                </h2>
                <p
                  style={{
                    fontSize: 12,
                    overflow: "hidden",
                    width: "8%",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {banner.description}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </Col>
    </Row>
  );
};

export default HomePage;
