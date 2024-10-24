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
import { useContext, useState } from "react";
import { AuthContext } from "../../../../contexts/auth.context";

const Comment = ({ data }) => {
  const [showReplies, setShowReplies] = useState(false);
  const { auth } = useContext(AuthContext);
  const isLiked = data.likes.includes(auth.user.id);
  const isDisliked = data.dislikes.includes(auth.user.id);
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
            <Button type="text" style={{ padding: 2 }}>
              {isLiked ? (
                <LikeFilled style={{ fontSize: 24, color: "#1890ff" }} />
              ) : (
                <LikeOutlined />
              )}
              {data.likes.length}
            </Button>
            <Button type="text" style={{ padding: 2 }}>
              {isDisliked ? (
                <DislikeFilled style={{ fontSize: 24, color: "#ff4d4f" }} />
              ) : (
                <DislikeOutlined />
              )}
              {data.dislikes.length}
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
