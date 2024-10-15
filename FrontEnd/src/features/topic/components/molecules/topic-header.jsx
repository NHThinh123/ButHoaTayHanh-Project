import { Avatar, Col, Flex, Row } from "antd";
import DefaultTitle from "../../../../components/atoms/default-title";
import DefaultText from "../../../../components/atoms/default-text";
import { EllipsisOutlined } from "@ant-design/icons";
import { format } from "date-fns";
import vi from "date-fns/locale/vi";
const TopicHeader = ({ author, uploadAt }) => {
  // Chuyển đổi chuỗi ngày tháng về đối tượng Date
  const uploadDate = new Date(uploadAt);

  // Hàm để định dạng thời gian
  const formatUploadDate = (date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000); // Tính số giây chênh lệch
    const oneDay = 24 * 60 * 60; // Số giây trong 1 ngày
    const oneWeek = 7 * oneDay; // Số giây trong 1 tuần

    // Điều kiện định dạng
    if (diffInSeconds < 3600) {
      return `${Math.floor(diffInSeconds / 60)} phút trước`; // Dưới 1 giờ
    } else if (diffInSeconds < oneDay) {
      return `${Math.floor(diffInSeconds / 3600)} giờ trước`; // Dưới 1 ngày
    } else if (diffInSeconds < oneWeek) {
      return `${Math.floor(diffInSeconds / oneDay)} ngày trước`; // Dưới 1 tuần
    } else {
      return format(date, "dd/MM/yyyy", { locale: vi }); // Trên 1 tuần
    }
  };
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
            <DefaultText style={{ fontSize: 14 }}>
              {formatUploadDate(uploadDate)}
            </DefaultText>
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
