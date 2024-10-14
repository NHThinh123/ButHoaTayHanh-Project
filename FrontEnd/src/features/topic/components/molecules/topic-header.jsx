import { Avatar, Col, Flex, Row } from "antd";
import DefaultTitle from "../../../../components/atoms/default-title";
import DefaultText from "../../../../components/atoms/default-text";
import { EllipsisOutlined } from "@ant-design/icons";

const TopicHeader = () => {
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
            {"KAFF".charAt(0).toUpperCase() ?? "U"}
          </Avatar>
          <Flex vertical>
            <DefaultTitle>KAFF Gaming</DefaultTitle>
            <DefaultText>20/10/2020</DefaultText>
          </Flex>
        </Flex>
      </Col>
      <Col span={2}>
        <EllipsisOutlined style={{ fontSize: 24 }} />
      </Col>
    </Row>
  );
};

export default TopicHeader;
