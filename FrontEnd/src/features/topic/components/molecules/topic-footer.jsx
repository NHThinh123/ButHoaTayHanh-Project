import {
  CommentOutlined,
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";
import { Col, Flex, Row } from "antd";
import DefaultTitle from "../../../../components/atoms/default-title";
import useLikeTopic from "../../hooks/useLikeTopic";

const TopicFooter = ({ topicData }) => {
  const { likes, dislikes, handleInteraction, userId } = useLikeTopic({
    initialData: topicData,
  });

  const isLiked = likes.includes(userId);
  const isDisliked = dislikes.includes(userId);

  const handleLike = () => {
    handleInteraction("like", topicData._id);
  };

  const handleDislike = () => {
    handleInteraction("dislike", topicData._id);
  };

  return (
    <Row style={{ marginTop: 24 }}>
      <Col span={8}>
        <Flex
          justify="center"
          align="center"
          gap="small"
          onClick={handleLike}
          style={{ cursor: "pointer" }}
        >
          {isLiked ? (
            <LikeFilled style={{ fontSize: 24, color: "#1890ff" }} />
          ) : (
            <LikeOutlined style={{ fontSize: 24 }} />
          )}
          <DefaultTitle style={{ fontSize: 18, fontWeight: 400 }}>
            {likes.length}
          </DefaultTitle>
        </Flex>
      </Col>

      <Col span={8}>
        <Flex
          justify="center"
          align="center"
          gap="small"
          onClick={handleDislike}
          style={{ cursor: "pointer" }}
        >
          {isDisliked ? (
            <DislikeFilled style={{ fontSize: 24, color: "#ff4d4f" }} />
          ) : (
            <DislikeOutlined style={{ fontSize: 24 }} />
          )}
          <DefaultTitle style={{ fontSize: 18, fontWeight: 400 }}>
            {dislikes.length}
          </DefaultTitle>
        </Flex>
      </Col>

      <Col span={8}>
        <Flex
          justify="center"
          align="center"
          gap="small"
          style={{ cursor: "pointer" }}
        >
          <CommentOutlined style={{ fontSize: 24 }} />
          <DefaultTitle style={{ fontSize: 18, fontWeight: 400 }}>
            {topicData.comments?.length || 0}
          </DefaultTitle>
        </Flex>
      </Col>
    </Row>
  );
};

export default TopicFooter;
