import { Col, Image, Row } from "antd";

import { CheckCircleOutlined } from "@ant-design/icons";
import BentoBox from "../../../../components/atoms/bento-box";
import DefaultTitle from "../../../../components/atoms/default-title";
import DefaultText from "../../../../components/atoms/default-text";
import formatDate from "../../../../utils/formatDate";

import useTopicData from "../../hooks/useTopicData";
import SkeletonCustom from "../../../../components/atoms/skeletons/topic-overview-skeleton";

const TopicOverview = ({ data }) => {
  const { loading } = useTopicData();
  if (loading) return <SkeletonCustom />;
  return (
    <BentoBox padding={12}>
      <Row gutter={8}>
        <Col span={8} style={{ height: 100 }}>
          <Image
            src={data?.image}
            height={100}
            style={{
              borderRadius: 8,
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          ></Image>
        </Col>
        <Col
          span={16}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <DefaultTitle style={{ fontSize: 16, marginTop: -4 }}>
            {data.title}
          </DefaultTitle>
          <DefaultText style={{ fontSize: 12, fontWeight: 500 }}>
            {`${data?.author?.username} `}
            <CheckCircleOutlined />
          </DefaultText>
          <DefaultText style={{ fontSize: 12 }}>
            {`${data.likes?.length} lượt thích・${formatDate(data?.uploadAt)}`}
          </DefaultText>
        </Col>
      </Row>
    </BentoBox>
  );
};

export default TopicOverview;
