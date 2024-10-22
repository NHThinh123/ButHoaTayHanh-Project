import {
  Avatar,
  Button,
  Col,
  Form,
  Input,
  List,
  Modal,
  Row,
  Space,
} from "antd";
import DefaultText from "../components/atoms/default-text";
import DefaultTitle from "../components/atoms/default-title";
import BentoBox from "../components/atoms/bento-box";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  CommentOutlined,
  DislikeOutlined,
  LikeOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { useState } from "react";
const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];
const { TextArea } = Input;
const App = () => {
  const [showReplies, setShowReplies] = useState(false);
  return (
    <div>
      <Modal
        open={true}
        centered
        width={600}
        title={
          <DefaultText
            style={{
              fontSize: 24,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "600",
            }}
          >
            69 Bình luận
          </DefaultText>
        }
        footer={
          <Row>
            <Col span={2} style={{ display: "flex", paddingTop: 12 }}>
              <Avatar
                src={
                  "https://yt3.ggpht.com/SxJooAauEAJgyz_9MqB21DvebRRXY5kPbVy4lB_95o3-8yGsMf1neXFEp0ujD-vdVykPPb4l=s88-c-k-c0x00ffffff-no-rj"
                }
              ></Avatar>
            </Col>
            <Col span={22}>
              <BentoBox padding={8}>
                <Form>
                  <Row>
                    <Col span={22}>
                      <Form.Item name="comment" noStyle>
                        <TextArea
                          placeholder="Bình luận dưới tên KAFF Gaming"
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
            </Col>
          </Row>
        }
      >
        <List
          dataSource={data}
          split={false}
          style={{
            overflow: "auto",
            height: "60vh",
            scrollbarWidth: "thin",
          }}
          renderItem={() => (
            <List.Item>
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
                    <DefaultTitle fontSize={14}>KAFF Gaming</DefaultTitle>
                    <DefaultText fontSize={12}>
                      We supply a series of design principles, practical
                      patterns and high quality design resources (Sketch and
                      Axure), to help people create their product prototypes
                      beautifully and efficiently.
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
                  {showReplies && (
                    <List
                      split={false}
                      dataSource={data}
                      renderItem={() => (
                        <List.Item>
                          <Row style={{ paddingLeft: "16px" }}>
                            <Col span={2} style={{ marginTop: 12 }}>
                              <Avatar
                                src={
                                  "https://yt3.ggpht.com/SxJooAauEAJgyz_9MqB21DvebRRXY5kPbVy4lB_95o3-8yGsMf1neXFEp0ujD-vdVykPPb4l=s88-c-k-c0x00ffffff-no-rj"
                                }
                              ></Avatar>
                            </Col>
                            <Col span={22}>
                              <BentoBox
                                padding={12}
                                style={{ margin: "0px 8px" }}
                              >
                                <DefaultTitle fontSize={14}>
                                  KAFF Gaming
                                </DefaultTitle>
                                <DefaultText fontSize={12}>
                                  We supply a series of design principles,
                                  practical patterns and high quality design
                                  resources (Sketch and Axure), to help people
                                  create their product prototypes beautifully
                                  and efficiently.
                                </DefaultText>
                              </BentoBox>
                            </Col>
                          </Row>
                        </List.Item>
                      )}
                    />
                  )}
                </Col>
              </Row>
            </List.Item>
          )}
        />
      </Modal>
    </div>
  );
};
export default App;
