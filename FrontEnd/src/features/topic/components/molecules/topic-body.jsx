import { Carousel, Col, Image, Row, Typography } from "antd";
import { useState } from "react";
import DefaultTitle from "../../../../components/atoms/default-title";
const { Paragraph } = Typography;
const TopicBody = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Row>
        <Col span={24} style={{ paddingTop: "12px" }}>
          <DefaultTitle>
            Thông báo bảo trì tất cả các máy chủ để nâng cấp hệ thống và thêm
            các chức năng mới
          </DefaultTitle>
        </Col>
        <Col span={24}>
          <Paragraph
            ellipsis={
              expanded
                ? false
                : {
                    rows: 4,
                    expandable: true,
                    symbol: "Xem thêm",
                  }
            }
            onClick={toggleExpand}
            style={{ fontSize: 16 }}
          >
            Cảm ơn các bạn đã ủng hộ Tây Du Ký: Vẽ Tây Du Ký Chúng tôi sẽ ngừng
            cập nhật và bảo trì từ 4h00-10h00 ngày 27/09. Trong thời gian cập
            nhật và bảo trì, tất cả người lớn Shuling sẽ không thể đăng nhập vào
            trò chơi. Để đảm bảo dữ liệu tài khoản của bạn vẫn bình thường, vui
            lòng kết thúc cấp độ trước và đóng trò chơi trước khi bảo trì. Chúng
            tôi xin lỗi sâu sắc vì sự bất tiện đã gây ra cho người lớn Shuling!
            Chúng tôi sẽ đưa ra bản cập nhật bồi thường cho mọi người sau khi
            bảo trì hoàn tất, vì vậy hãy thông báo cho nhau.
          </Paragraph>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Carousel
            arrows
            autoplay
            autoplaySpeed={5000}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <Image
              preview={false}
              src="https://img.tapimg.net/market/images/c974466779e49a362e5a93661ecaab5f.jpg"
              style={{
                borderRadius: 8,
                objectFit: "cover",
                width: "100%",
                minHeight: 420,
              }}
            ></Image>
            <Image
              preview={false}
              src="https://img.tapimg.net/market/images/c974466779e49a362e5a93661ecaab5f.jpg"
              style={{
                borderRadius: 8,
                objectFit: "cover",
                width: "100%",
                minHeight: 200,
              }}
            ></Image>
          </Carousel>
        </Col>
      </Row>
    </>
  );
};

export default TopicBody;
