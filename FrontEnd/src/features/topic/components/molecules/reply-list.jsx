import { Avatar, Col, List, Row } from "antd";
import BentoBox from "../../../../components/atoms/bento-box";
import DefaultTitle from "../../../../components/atoms/default-title";
import DefaultText from "../../../../components/atoms/default-text";

const ReplyList = ({ data }) => {
  return (
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
              <BentoBox padding={12} style={{ margin: "0px 8px" }}>
                <DefaultTitle fontSize={14}>KAFF Gaming</DefaultTitle>
                <DefaultText fontSize={12}>
                  We supply a series of design principles, practical patterns
                  and high quality design resources (Sketch and Axure), to help
                  people create their product prototypes beautifully and
                  efficiently.
                </DefaultText>
              </BentoBox>
            </Col>
          </Row>
        </List.Item>
      )}
    />
  );
};

export default ReplyList;
