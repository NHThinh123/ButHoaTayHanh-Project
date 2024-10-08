import { Avatar, Col, Flex, Image, Row } from "antd";
import celestialIcon from "../../../../assets/images/icon/celestial-icon.png";
import underworldIcon from "../../../../assets/images/icon/underworld-icon.png";
import humanIcon from "../../../../assets/images/icon/human-icon.png";
import demonIcon from "../../../../assets/images/icon/demon-icon.png";
import holyIcon from "../../../../assets/images/icon/holy-icon.png";
import assassinIcon from "../../../../assets/images/icon/assassin-icon.png";
import warriorIcon from "../../../../assets/images/icon/warrior-icon.png";
import mageIcon from "../../../../assets/images/icon/mage-icon.png";
import tankerIcon from "../../../../assets/images/icon/tanker-icon.png";
import supporterIcon from "../../../../assets/images/icon/supporter-icon.png";
import healerIcon from "../../../../assets/images/icon/healer-icon.png";
import DiamondIcon from "../../../../components/atoms/diamond-icon";
import CardText from "../../../../components/atoms/card-text";
import styles from "../../styles/styles.module.css";
import BentoBox from "../../../../components/atoms/bento-box";
const CharacterCard = ({ character }) => {
  return (
    <BentoBox minHeight={200}>
      <div
        style={{ position: "relative", overflow: "hidden" }}
        className={styles.cardBentoBox}
      >
        <Image
          alt="character"
          src={character.image}
          preview={false}
          className={styles.cardImage}
        />
        <div className={styles.characterCardWrapper}>
          <Row style={{ padding: 5 }}>
            <Col span={6} style={{ padding: 5 }}>
              {character.rarity === "SSR" ? (
                <DiamondIcon colorBg={"#E2924F"} colorText={"#F7D550"}>
                  {character.rarity}
                </DiamondIcon>
              ) : character.rarity === "SR" ? (
                <DiamondIcon colorBg={"#6F2E8A"} colorText={"#EEB4F1"}>
                  {character.rarity}
                </DiamondIcon>
              ) : (
                <DiamondIcon colorBg={"#45669F"} colorText={"#AFD9FC"}>
                  {character.rarity}
                </DiamondIcon>
              )}
            </Col>
            <Col span={18}>
              <Row>
                <Col span={24} style={{}}>
                  <Flex justify="right" align="flex-end" vertical gap={"small"}>
                    <Avatar
                      src={
                        character.faction === "Tiên giới"
                          ? celestialIcon
                          : character.faction === "Nhân giới"
                          ? humanIcon
                          : character.faction === "Yêu giới"
                          ? demonIcon
                          : character.faction === "Thánh giới"
                          ? holyIcon
                          : underworldIcon
                      }
                    />
                    <Avatar
                      src={
                        character.role === "Sát thủ"
                          ? assassinIcon
                          : character.role === "Mưu sĩ"
                          ? mageIcon
                          : character.role === "Đấu sĩ"
                          ? warriorIcon
                          : character.role === "Đỡ đòn"
                          ? tankerIcon
                          : character.role === "Hồi máu"
                          ? healerIcon
                          : supporterIcon
                      }
                    />
                  </Flex>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={24} className={styles.cardNameWrapper}>
              <CardText fontSize={18}> {character.name}</CardText>
            </Col>
          </Row>
        </div>
      </div>
    </BentoBox>
  );
};

export default CharacterCard;
