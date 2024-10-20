import { Carousel, Col, Image, Row, Typography } from "antd";
import DefaultTitle from "../../../../components/atoms/default-title";
import { useEffect, useState } from "react";
import SpinLoading from "../../../../components/atoms/spin-loading";

const { Paragraph } = Typography;
const TopicBody = ({ topicData }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <SpinLoading />;
  return (
    <>
      <Row>
        <Col span={24} style={{ paddingTop: "12px" }}>
          <DefaultTitle>{topicData.title}</DefaultTitle>
        </Col>
        <Col span={24}>
          <Paragraph
            ellipsis={
              expanded
                ? false
                : {
                    rows: 4,
                    expandable: true,
                    symbol: "Xem thêm",
                  }
            }
            onClick={toggleExpand}
            style={{ fontSize: 16 }}
          >
            {topicData.description}
          </Paragraph>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Carousel
            arrows
            autoplay
            autoplaySpeed={5000}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            {topicData.image.map((img, index) => (
              <Image
                loading="lazy"
                key={index}
                preview={false}
                src={img}
                style={{
                  borderRadius: 8,
                  objectFit: "cover",
                  width: "100%",
                  minHeight: 420,
                }}
              ></Image>
            ))}
          </Carousel>
        </Col>
      </Row>
    </>
  );
};

export default TopicBody;
