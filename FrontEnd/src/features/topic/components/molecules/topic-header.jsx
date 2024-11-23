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
import { useState } from "react";

const TopicHeader = ({
  author,
  uploadAt,
  category,
  topicData,
  deleteTopic,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showDeleteModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDelete = () => {
    deleteTopic(topicData._id);
    setIsModalVisible(false);
  };

  const items = [
    {
      key: "1",
      label: (
        <Button color="default" variant="text" onClick={showDeleteModal} block>
          Xóa
        </Button>
      ),
    },
  ];

  return (
    <>
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
            <Button>
              <EllipsisOutlined style={{ fontSize: 24 }} />
            </Button>
          </Dropdown>
        </Col>
      </Row>

      {/* Modal */}
      <Modal
        title="Xóa bài đăng này?"
        visible={isModalVisible}
        onCancel={handleCancel} // Đóng modal khi nhấn nút "X" hoặc hủy
        closable={true} // Hiển thị nút "X" ở góc phải trên
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Hủy
          </Button>,
          <Button key="delete" type="primary" danger onClick={handleDelete}>
            Xóa
          </Button>,
        ]}
      >
        Bạn chắc chắn muốn xóa bài viết này?
      </Modal>
    </>
  );
};

export default TopicHeader;
