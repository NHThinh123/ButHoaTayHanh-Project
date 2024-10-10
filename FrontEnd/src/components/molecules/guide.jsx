import { Col, Image, Row } from "antd";
import BentoBox from "../atoms/bento-box";

const Guide = ({ height, imgSpan }) => {
  const textSpan = 24 - imgSpan;
  return (
    <BentoBox padding={12}>
      <Row>
        <Col
          span={imgSpan}
          style={{
            width: "100%",
            height: height,
            padding: "0px",
            overflow: "hidden",
          }}
        >
          <Image
            src="https://img.tapimg.net/market/images/c974466779e49a362e5a93661ecaab5f.jpg"
            height={height}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          ></Image>
        </Col>
        <Col span={textSpan}>
          <h2
            style={{
              fontSize: 16,
              marginLeft: "5px",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            Thông báo bảo trì tất cả các máy chủ để nâng cấp hệ thống và thêm
            các chức năng mới
          </h2>
          <p style={{ fontSize: 12 }}>
            149 lượt thích-5 bình luận-2 tháng trước
          </p>
        </Col>
      </Row>
    </BentoBox>
  );
};

export default Guide;
