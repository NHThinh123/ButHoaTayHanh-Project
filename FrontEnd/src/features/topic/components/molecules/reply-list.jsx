import { Avatar, Col, List, Row } from "antd";
import BentoBox from "../../../../components/atoms/bento-box";
import DefaultTitle from "../../../../components/atoms/default-title";
import DefaultText from "../../../../components/atoms/default-text";

const ReplyList = ({ data }) => {
  return (
    <List
      itemLayout="vertical"
      split={false}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Row style={{ paddingLeft: "16px" }}>
            <Col span={2} style={{ marginTop: 12 }}>
              <Avatar
                size={40}
                style={{
                  backgroundColor: "#fde3cf",
                  color: "#f56a00",
                }}
              >
                {item.author?.username?.charAt(0).toUpperCase() ?? "U"}
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
                <DefaultTitle fontSize={14}>
                  {item.author?.username}
                </DefaultTitle>
                <DefaultText padding={4}>{item.content}</DefaultText>
              </BentoBox>
            </Col>
          </Row>
        </List.Item>
      )}
    />
  );
};

export default ReplyList;
