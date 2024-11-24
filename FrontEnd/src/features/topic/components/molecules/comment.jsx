import { Avatar, Button, Col, Row, Space } from "antd";
import BentoBox from "../../../../components/atoms/bento-box";
import DefaultTitle from "../../../../components/atoms/default-title";
import DefaultText from "../../../../components/atoms/default-text";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  CommentOutlined,
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
} from "@ant-design/icons";
import ReplyList from "./reply-list";
import useLikeCommentData from "../../hooks/useLikeCommentData";
import useReplyCommentData from "../../hooks/useReplyCommentData";
import ReplyForm from "./replyForm";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../contexts/auth.context";
import { useNavigate } from "react-router-dom";
import LoginRequiredModal from "../../../../components/atoms/login-modal-required";

const Comment = ({ data }) => {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const {
    handleLike,
    handleDislike,
    isDisliked,
    isLiked,
    likes,
    dislikes,
    showReplies,
    setShowReplies,
  } = useLikeCommentData({ comment: data });
  const {
    replyData,
    handleReply,
    form,
    handleReplyClick,
    textAreaRef,
    showReplyForm,
  } = useReplyCommentData({
    comment: data,
  });

  // Hiển thị modal yêu cầu đăng nhập
  const showLoginModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    navigate("/login"); // Chuyển hướng tới trang đăng nhập
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Xử lý click khi người dùng chưa đăng nhập
  const handleAction = (action) => {
    if (!auth.isAuthentication) {
      showLoginModal();
    } else {
      action(); // Thực hiện hành động nếu đã đăng nhập
    }
  };

  return (
    <>
      <Row>
        <Col span={2} style={{ marginTop: 12 }}>
          <Avatar
            size={40}
            style={{
              backgroundColor: "#fde3cf",
              color: "#f56a00",
            }}
          >
            {data.author?.username?.charAt(0).toUpperCase() ?? "U"}
          </Avatar>
        </Col>
        <Col span={22}>
          <BentoBox
            padding={12}
            style={{
              paddingTop: 4,
              display: "inline-block",
              marginBottom: 0,
            }}
          >
            <DefaultTitle fontSize={14}>{data.author.username}</DefaultTitle>
            <DefaultText style={{ paddingTop: 4 }}>{data.content}</DefaultText>
          </BentoBox>
          <div style={{ marginLeft: 12 }}>
            <Space style={{ margin: "4px 0px" }}>
              <Button
                type="text"
                style={{ padding: 2 }}
                onClick={() => handleAction(handleLike)}
              >
                {isLiked ? (
                  <LikeFilled style={{ color: "#4335A7" }} />
                ) : (
                  <LikeOutlined />
                )}
                {likes}
              </Button>
              <Button
                type="text"
                style={{ padding: 2 }}
                onClick={() => handleAction(handleDislike)}
              >
                {isDisliked ? (
                  <DislikeFilled style={{ color: "#ff4d4f" }} />
                ) : (
                  <DislikeOutlined />
                )}
                {dislikes}
              </Button>
              <Button
                type="text"
                style={{ padding: 2 }}
                onClick={() => handleAction(handleReplyClick)}
              >
                <CommentOutlined /> phản hồi
              </Button>
            </Space>

            {showReplyForm && (
              <ReplyForm
                form={form}
                handleReply={handleReply}
                textAreaRef={textAreaRef}
              ></ReplyForm>
            )}

            {replyData.length > 0 && (
              <DefaultTitle fontSize={14}>
                <Button
                  type="text"
                  onClick={() => {
                    setShowReplies(!showReplies);
                  }}
                  style={{ padding: 0, paddingRight: 4 }}
                >
                  {showReplies ? (
                    <div style={{ color: "#4335A7" }}>
                      <CaretUpOutlined /> {replyData.length} phản hồi
                    </div>
                  ) : (
                    <div style={{ color: "#4335A7" }}>
                      <CaretDownOutlined /> {replyData.length} phản hồi
                    </div>
                  )}
                </Button>
              </DefaultTitle>
            )}
          </div>
          {showReplies && <ReplyList data={replyData} />}
        </Col>
      </Row>
      {/* Modal yêu cầu đăng nhập */}
      <LoginRequiredModal
        isVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default Comment;
