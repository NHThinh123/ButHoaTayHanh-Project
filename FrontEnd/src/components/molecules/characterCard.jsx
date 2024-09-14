import { Avatar, Col, Flex, Image, Row } from "antd";
import natraImg from "../../assets/images/character/natra.jpg";
import celestialIcon from "../../assets/images/icon/celestial-icon.png";
import BentoBox from "../atoms/bento-box";

import DiamondIcon from "../atoms/diamond-icon";
import CardText from "../atoms/card-text";
const CharacterCard = () => {
  return (
    <BentoBox>
      <div style={{ position: "relative" }}>
        <Image alt="character" src={natraImg} preview={false} />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            color: "white",
          }}
        >
          <Row style={{ padding: 5 }}>
            <Col span={6} style={{ padding: 5 }}>
              <DiamondIcon colorBg={"#DD761C"} colorText={"#FFD700"}>
                SSR
              </DiamondIcon>
            </Col>
            <Col span={18}>
              <Row>
                <Col span={24} style={{}}>
                  <Flex justify="right" align="flex-end" vertical gap={"small"}>
                    <Avatar src={celestialIcon} size={"large"} />
                    <Avatar src={celestialIcon} size={"large"} />
                  </Flex>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col
              span={24}
              style={{
                background: "rgba(16, 26, 30, 0.3)",
                marginBottom: "30px",
              }}
            >
              <CardText fontSize={24}> Na Tra</CardText>
            </Col>
          </Row>
        </div>
      </div>
    </BentoBox>
  );
};

export default CharacterCard;
