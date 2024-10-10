import { Avatar, Carousel, Col, Flex, Image, Row, Typography } from "antd";
import BentoBox from "../../../../components/atoms/bento-box";
import DefaultTitle from "../../../../components/atoms/default-title";
import DefaultText from "../../../../components/atoms/default-text";
import {
  CommentOutlined,
  DislikeOutlined,
  EllipsisOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import { useState } from "react";
const { Paragraph } = Typography;
const Topic = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <BentoBox padding={28}>
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
        </Col>
      </Row>

      <Row style={{ marginTop: 24 }}>
        <Col span={8}>
          <Flex justify="center" align="center" gap="small">
            <LikeOutlined style={{ fontSize: 24 }} />
            <DefaultTitle style={{ fontSize: 18, fontWeight: 400 }}>
              12
            </DefaultTitle>
          </Flex>
        </Col>

        <Col span={8}>
          <Flex justify="center" align="center" gap="small">
            <DislikeOutlined style={{ fontSize: 24 }} />
            <DefaultTitle style={{ fontSize: 18, fontWeight: 400 }}>
              12
            </DefaultTitle>
          </Flex>
        </Col>
        <Col span={8}>
          <Flex justify="center" align="center" gap="small">
            <CommentOutlined style={{ fontSize: 24 }} />
            <DefaultTitle style={{ fontSize: 18, fontWeight: 400 }}>
              12
            </DefaultTitle>
          </Flex>
        </Col>
      </Row>
    </BentoBox>
  );
};

export default Topic;
