import { useState } from "react";
import {
  CommentOutlined,
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";
import { Col, Flex, Row, message } from "antd";
import DefaultTitle from "../../../../components/atoms/default-title";

const TopicFooter = ({ topicData, onLike, onDislike, onComment }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [likes, setLikes] = useState(topicData.likes.length);
  const [dislikes, setDislikes] = useState(topicData.dislikes.length);
  const [comments, setComments] = useState(topicData.comments.length);

  const handleLike = async () => {
    try {
      if (isDisliked) {
        setIsDisliked(false);
        setDislikes(dislikes - 1);
      }
      setIsLiked(!isLiked);
      const newLikes = isLiked ? likes - 1 : likes + 1;
      setLikes(newLikes);
      await onLike(topicData.id, newLikes);
    } catch (error) {
      message.error("Failed to update like");
    }
  };

  const handleDislike = async () => {
    try {
      if (isLiked) {
        setIsLiked(false);
        setLikes(likes - 1);
      }
      setIsDisliked(!isDisliked);
      const newDislikes = isDisliked ? dislikes - 1 : dislikes + 1;
      setDislikes(newDislikes);
      await onDislike(topicData.id, newDislikes);
    } catch (error) {
      message.error("Failed to update dislike");
    }
  };

  const handleComment = () => {
    // Implement comment functionality
    // This could open a modal or navigate to a comment section
    onComment(topicData.id);
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
            {likes}
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
            {dislikes}
          </DefaultTitle>
        </Flex>
      </Col>

      <Col span={8}>
        <Flex
          justify="center"
          align="center"
          gap="small"
          onClick={handleComment}
          style={{ cursor: "pointer" }}
        >
          <CommentOutlined style={{ fontSize: 24 }} />
          <DefaultTitle style={{ fontSize: 18, fontWeight: 400 }}>
            {comments}
          </DefaultTitle>
        </Flex>
      </Col>
    </Row>
  );
};

export default TopicFooter;
