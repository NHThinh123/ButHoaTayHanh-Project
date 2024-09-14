import { Avatar, Col, Flex, Image, Row } from "antd";
import natraImg from "../../../assets/images/character/natra.jpg";
import celestialIcon from "../../../assets/images/icon/celestial-icon.png";
import BentoBox from "../../../components/atoms/bento-box";
import DiamondIcon from "../../../components/atoms/diamond-icon";
import CardText from "../../../components/atoms/card-text";
import styles from "../styles/styles.module.css";
const CharacterCard = () => {
  return (
    <BentoBox>
      <div
        style={{ position: "relative", overflow: "hidden" }}
        className={styles.cardBentoBox}
      >
        <Image
          alt="character"
          src={natraImg}
          preview={false}
          className={styles.cardImage}
        />
        <div className={styles.characterCardWrapper}>
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
            <Col span={24} className={styles.cardNameWrapper}>
              <CardText fontSize={24}> Na Tra</CardText>
            </Col>
          </Row>
        </div>
      </div>
    </BentoBox>
  );
};

export default CharacterCard;
