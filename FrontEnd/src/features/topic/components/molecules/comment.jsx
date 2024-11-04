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

const Comment = ({ data }) => {
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

  return (
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
          <DefaultTitle>{data.author.username}</DefaultTitle>
          <DefaultText style={{ paddingTop: 8 }}>{data.content}</DefaultText>
        </BentoBox>
        <div style={{ marginLeft: 12 }}>
          <Space style={{ margin: "4px 0px" }}>
            <Button type="text" style={{ padding: 2 }} onClick={handleLike}>
              {isLiked ? (
                <LikeFilled style={{ color: "#1890ff" }} />
              ) : (
                <LikeOutlined />
              )}
              {likes}
            </Button>
            <Button type="text" style={{ padding: 2 }} onClick={handleDislike}>
              {isDisliked ? (
                <DislikeFilled style={{ color: "#ff4d4f" }} />
              ) : (
                <DislikeOutlined />
              )}
              {dislikes}
            </Button>
            <Button type="text" style={{ padding: 2 }}>
              <CommentOutlined /> phản hồi
            </Button>
          </Space>
          {data?.replies.length > 0 && (
            <DefaultTitle fontSize={14}>
              <Button
                type="text"
                onClick={() => {
                  setShowReplies(!showReplies);
                }}
                style={{ padding: 0, paddingRight: 4 }}
              >
                {showReplies ? (
                  <div style={{ color: "#1890FF" }}>
                    <CaretUpOutlined /> 3 phản hồi
                  </div>
                ) : (
                  <div style={{ color: "#1890FF" }}>
                    <CaretDownOutlined /> 3 phản hồi{" "}
                  </div>
                )}
              </Button>
            </DefaultTitle>
          )}
        </div>
        {showReplies && <ReplyList data={data} />}
      </Col>
    </Row>
  );
};

export default Comment;
