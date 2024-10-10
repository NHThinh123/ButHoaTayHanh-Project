import { Col, Image, Row } from "antd";
import BentoBox from "../../../components/atoms/bento-box";
import DefaultTitle from "../../../components/atoms/default-title";
import DefaultText from "../../../components/atoms/default-text";
import { CheckCircleOutlined } from "@ant-design/icons";

const TopicOverview = () => {
  return (
    <BentoBox padding={12}>
      <Row gutter={8}>
        <Col span={8} style={{ height: 100 }}>
          <Image
            src="https://img.tapimg.net/market/images/c974466779e49a362e5a93661ecaab5f.jpg"
            height={100}
            style={{
              borderRadius: 8,
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          ></Image>
        </Col>
        <Col
          span={16}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <DefaultTitle style={{ fontSize: 16, marginTop: -4 }}>
            Thông báo bảo trì tất cả các máy chủ để nâng cấp hệ thống và thêm
            các chức năng mới
          </DefaultTitle>
          <DefaultText style={{ fontSize: 12, fontWeight: 500 }}>
            KAFF {""}
            <CheckCircleOutlined />
          </DefaultText>
          <DefaultText style={{ fontSize: 12 }}>
            149 lượt thích・2 tháng trước
          </DefaultText>
        </Col>
      </Row>
    </BentoBox>
  );
};

export default TopicOverview;
