import { Col, Image, Row, Skeleton, Typography } from "antd";
import DefaultTitle from "../../../../components/atoms/default-title";
import { useEffect, useState } from "react";

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
  if (loading)
    return (
      <Skeleton
        avatar
        paragraph={{
          rows: 1,
        }}
        active
      />
    );
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
          <Image
            loading="lazy"
            preview={false}
            src={topicData?.image[0]}
            style={{
              borderRadius: 8,
              objectFit: "cover",
              width: "100%",
              minHeight: 420,
            }}
          ></Image>
        </Col>
      </Row>
    </>
  );
};

export default TopicBody;
