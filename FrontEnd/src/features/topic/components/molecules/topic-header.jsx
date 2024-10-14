import { Avatar, Col, Flex, Row } from "antd";
import DefaultTitle from "../../../../components/atoms/default-title";
import DefaultText from "../../../../components/atoms/default-text";
import { EllipsisOutlined } from "@ant-design/icons";

const TopicHeader = ({ author, uploadAt }) => {
  return (
    <Row>
      <Col span={22}>
        <Flex gap="middle" align="center">
          <Avatar
            size={40}
            style={{
              backgroundColor: "#fde3cf",
              color: "#f56a00",
            }}
          >
            {author?.userName?.charAt(0).toUpperCase() ?? "U"}
          </Avatar>
          <Flex vertical>
            <DefaultTitle>{author?.userName}</DefaultTitle>
            <DefaultText style={{ fontSize: 14 }}>{uploadAt}</DefaultText>
          </Flex>
        </Flex>
      </Col>
      <Col span={2} style={{ textAlign: "right" }}>
        <EllipsisOutlined style={{ fontSize: 24 }} />
      </Col>
    </Row>
  );
};

export default TopicHeader;
