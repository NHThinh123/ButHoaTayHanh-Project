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
import { useContext, useState } from "react";
import { AuthContext } from "../../../../contexts/auth.context";
import { useNavigate } from "react-router-dom";
import LoginRequiredModal from "../../../../components/atoms/login-modal-required";

const TopicFooter = ({ topicData }) => {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  const [isLoginModalVisible, setLoginModalVisible] = useState(false);

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

  // Hiển thị modal yêu cầu đăng nhập
  const showLoginModal = () => {
    setLoginModalVisible(true);
  };

  const handleLoginRedirect = () => {
    setLoginModalVisible(false);
    navigate("/login");
  };

  const handleModalCancel = () => {
    setLoginModalVisible(false);
  };

  // Hành động được bảo vệ (yêu cầu đăng nhập)
  const handleAction = (action) => {
    if (!auth.isAuthentication) {
      showLoginModal();
    } else {
      action();
    }
  };

  return (
    <>
      <Row style={{ marginTop: 24 }}>
        <Col span={8}>
          <Flex
            justify="center"
            align="center"
            gap="small"
            style={{ cursor: "pointer" }}
          >
            <Button type="text" onClick={() => handleAction(handleLike)}>
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
            <Button type="text" onClick={() => handleAction(handleDislike)}>
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
      </Row>

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

      {/* Modal yêu cầu đăng nhập */}
      <LoginRequiredModal
        isVisible={isLoginModalVisible}
        handleOk={handleLoginRedirect}
        handleCancel={handleModalCancel}
      />
    </>
  );
};

export default TopicFooter;
