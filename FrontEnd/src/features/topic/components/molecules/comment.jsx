import { Avatar, Button, Col, Row, Space } from "antd";
import BentoBox from "../../../../components/atoms/bento-box";
import DefaultTitle from "../../../../components/atoms/default-title";
import DefaultText from "../../../../components/atoms/default-text";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  CommentOutlined,
  DislikeOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import ReplyList from "./reply-list";
import { useState } from "react";

const Comment = ({ data }) => {
  const [showReplies, setShowReplies] = useState(false);
  return (
    <Row>
      <Col span={2} style={{ marginTop: 12 }}>
        <Avatar
          src={
            "https://yt3.ggpht.com/SxJooAauEAJgyz_9MqB21DvebRRXY5kPbVy4lB_95o3-8yGsMf1neXFEp0ujD-vdVykPPb4l=s88-c-k-c0x00ffffff-no-rj"
          }
        ></Avatar>
      </Col>
      <Col span={22}>
        <BentoBox padding={12}>
          <DefaultTitle>KAFF Gaming</DefaultTitle>
          <DefaultText>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
          </DefaultText>
        </BentoBox>
        <div style={{ marginLeft: 12 }}>
          <Space style={{ margin: "4px 0px" }}>
            <LikeOutlined /> 99 <DislikeOutlined /> 99
            <p>
              <CommentOutlined /> phản hồi
            </p>
          </Space>
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
        </div>
        {showReplies && <ReplyList data={data} />}
      </Col>
    </Row>
  );
};

export default Comment;
