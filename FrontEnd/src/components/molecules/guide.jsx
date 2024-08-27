import { Card, Col, Image, Row } from "antd";

const Guide = (props) => {
  const { height, imgSpan } = props;
  const textSpan = 24 - imgSpan;
  return (
    <>
      <Card style={{ width: "100%", marginBottom: "10px" }} hoverable>
        <Row>
          <Col
            span={imgSpan}
            style={{
              backgroundColor: "green",
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
                objectFit: "cover", // Thay đổi thành cover
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
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Guide;
