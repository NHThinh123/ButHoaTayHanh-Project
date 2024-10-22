import {
  CommentOutlined,
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";
import { Button, Col, Flex, Row } from "antd";
import DefaultTitle from "../../../../components/atoms/default-title";
import useLikeTopic from "../../hooks/useLikeTopic";
import ModalComment from "../organisms/modalComment";
import useCommentData from "../../hooks/useCommentData";

const TopicFooter = ({ topicData }) => {
  const { likes, dislikes, handleInteraction, userId } = useLikeTopic({
    initialData: topicData,
  });
  const { showModalComment, closeModel, openModal } = useCommentData();
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
          style={{ cursor: "pointer" }}
        >
          <Button type="text" onClick={handleLike}>
            {isLiked ? (
              <LikeFilled style={{ fontSize: 24, color: "#1890ff" }} />
            ) : (
              <LikeOutlined style={{ fontSize: 24 }} />
            )}
            <DefaultTitle style={{ fontSize: 18, fontWeight: 400 }}>
              {likes.length}
            </DefaultTitle>
          </Button>
        </Flex>
      </Col>

      <Col span={8}>
        <Flex
          justify="center"
          align="center"
          gap="small"
          style={{ cursor: "pointer" }}
        >
          <Button type="text" onClick={handleDislike}>
            {isDisliked ? (
              <DislikeFilled style={{ fontSize: 24, color: "#ff4d4f" }} />
            ) : (
              <DislikeOutlined style={{ fontSize: 24 }} />
            )}
            <DefaultTitle style={{ fontSize: 18, fontWeight: 400 }}>
              {dislikes.length}
            </DefaultTitle>
          </Button>
        </Flex>
      </Col>

      <Col span={8}>
        <Flex
          justify="center"
          align="center"
          gap="small"
          style={{ cursor: "pointer" }}
        >
          <Button type="text" onClick={openModal}>
            <CommentOutlined style={{ fontSize: 24 }} />
            <DefaultTitle style={{ fontSize: 18, fontWeight: 400 }}>
              {topicData.comments?.length || 0}
            </DefaultTitle>
          </Button>
        </Flex>
        <ModalComment
          showModalComment={showModalComment}
          closeModal={closeModel}
          topicId={topicData._id}
        />
      </Col>
    </Row>
  );
};

export default TopicFooter;
