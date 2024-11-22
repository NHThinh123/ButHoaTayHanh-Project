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
  const { likes, dislikes, isLiked, isDisliked, handleLike, handleDislike } =
    useLikeTopic({ topic: topicData });
  const {
    showModalComment,
    closeModel,
    openModal,
    commentData,
    handleComment,
    form,
    commentCount,
    hasMore,
    loadMore,
    loading,
  } = useCommentData({ topic: topicData });

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
              <LikeFilled style={{ fontSize: 24, color: "#4335A7" }} />
            ) : (
              <LikeOutlined style={{ fontSize: 24 }} />
            )}
            <DefaultTitle style={{ fontSize: 18, fontWeight: 400 }}>
              {likes}
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
              {dislikes}
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
              {commentCount || 0}
            </DefaultTitle>
          </Button>
        </Flex>
      </Col>
      <ModalComment
        showModalComment={showModalComment}
        closeModal={closeModel}
        commentData={commentData}
        handleComment={handleComment}
        form={form}
        commentCount={commentCount}
        hasMore={hasMore}
        loadMore={loadMore}
        loading={loading}
      />
    </Row>
  );
};

export default TopicFooter;
