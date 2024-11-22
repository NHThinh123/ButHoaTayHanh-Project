import {
  Avatar,
  Button,
  Col,
  Dropdown,
  Flex,
  Modal,
  Row,
  Typography,
} from "antd";
import DefaultTitle from "../../../../components/atoms/default-title";
import DefaultText from "../../../../components/atoms/default-text";
import { EllipsisOutlined } from "@ant-design/icons";
import formatDate from "../../../../utils/formatDate";

const TopicHeader = ({
  author,
  uploadAt,
  category,
  topicData,
  deleteTopic,
}) => {
  const error = () => {
    Modal.error({
      title: "Xóa bài đăng này?",
      content: "Bạn chắc chắn xóa bài viết này",
      onOk: () => deleteTopic(topicData._id),
    });
  };
  const items = [
    {
      key: "1",
      label: (
        <Button color="default" variant="text" onClick={error} block>
          Xóa
        </Button>
      ),
    },
  ];

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
            {author?.username?.charAt(0).toUpperCase() ?? "U"}
          </Avatar>
          <Flex vertical>
            <DefaultTitle>{author?.username}</DefaultTitle>
            <DefaultText style={{ fontSize: 14 }}>
              {formatDate(uploadAt)}
              <Typography.Text
                style={{
                  color: "#4335A7",
                  fontSize: 16,
                  fontWeight: 700,
                  marginLeft: 12,
                }}
              >
                {category}
              </Typography.Text>
            </DefaultText>
          </Flex>
        </Flex>
      </Col>
      <Col span={2} style={{ textAlign: "right" }}>
        <Dropdown menu={{ items }} placement="bottomLeft">
          <Button
            onClick={() => {
              console.log(topicData._id);
            }}
          >
            <EllipsisOutlined style={{ fontSize: 24 }} />
          </Button>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default TopicHeader;
