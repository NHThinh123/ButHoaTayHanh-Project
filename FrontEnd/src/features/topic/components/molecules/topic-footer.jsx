import {
  CommentOutlined,
  DislikeOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import { Col, Flex, Row } from "antd";
import DefaultTitle from "../../../../components/atoms/default-title";

const TopicFooter = ({ topicData }) => {
  return (
    <Row style={{ marginTop: 24 }}>
      <Col span={8}>
        <Flex justify="center" align="center" gap="small">
          <LikeOutlined style={{ fontSize: 24 }} />
          <DefaultTitle style={{ fontSize: 18, fontWeight: 400 }}>
            {topicData.likes.length}
          </DefaultTitle>
        </Flex>
      </Col>

      <Col span={8}>
        <Flex justify="center" align="center" gap="small">
          <DislikeOutlined style={{ fontSize: 24 }} />
          <DefaultTitle style={{ fontSize: 18, fontWeight: 400 }}>
            {topicData.dislikes.length}
          </DefaultTitle>
        </Flex>
      </Col>
      <Col span={8}>
        <Flex justify="center" align="center" gap="small">
          <CommentOutlined style={{ fontSize: 24 }} />
          <DefaultTitle style={{ fontSize: 18, fontWeight: 400 }}>
            {topicData.comments.length}
          </DefaultTitle>
        </Flex>
      </Col>
    </Row>
  );
};

export default TopicFooter;
