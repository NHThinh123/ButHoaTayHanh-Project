import { useState, useRef } from "react";
import { Avatar, Button, Col, Form, Row, Space } from "antd";
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
  SendOutlined,
} from "@ant-design/icons";
import ReplyList from "./reply-list";
import useLikeCommentData from "../../hooks/useLikeCommentData";
import TextArea from "antd/es/input/TextArea";

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

  const [showReplyForm, setShowReplyForm] = useState(false); // Trạng thái hiển thị form phản hồi
  const textAreaRef = useRef(null); // Tạo ref cho TextArea

  const handleReplyClick = () => {
    setShowReplyForm(!showReplyForm); // Hiện form phản hồi
    setTimeout(() => {
      textAreaRef.current?.focus(); // Focus vào TextArea khi form hiện ra
    }, 0);
  };

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
            <Button
              type="text"
              style={{ padding: 2 }}
              onClick={handleReplyClick}
            >
              <CommentOutlined /> phản hồi
            </Button>
          </Space>

          {showReplyForm && ( // Hiện form phản hồi nếu showReplyForm = true
            <BentoBox style={{ margin: 0 }}>
              <Form>
                <Row>
                  <Col span={22}>
                    <Form.Item name="content" noStyle>
                      <TextArea
                        ref={textAreaRef} // Tham chiếu TextArea tới ref
                        placeholder={`Bình luận dưới tên `}
                        variant="borderless"
                        autoSize={{
                          minRows: 2,
                          maxRows: 5,
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={2}>
                    <Form.Item noStyle>
                      <Button htmlType="submit" block type="text">
                        <SendOutlined />
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </BentoBox>
          )}

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
