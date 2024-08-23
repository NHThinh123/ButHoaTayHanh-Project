import { Avatar, Flex, Image } from "antd";
import natraImg from "../../assets/images/character/natra.jpg";
import celestialIcon from "../../assets/images/icon/celestial-icon.png";
const CharacterCard = () => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <Image alt="character" src={natraImg} preview={false} />
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "absolute",
            bottom: 0,
            width: "100%",
            color: "white",
            padding: "5px",
          }}
        >
          <Flex vertical>
            <div
              style={{
                fontSize: 20,
                fontWeight: "700",
                overflow: "hidden",
                width: "100%",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                textAlign: "center",
                padding: "10px",
              }}
            >
              Natraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </div>

            <Flex align="center" justify="space-around">
              <Flex align="center" gap={"small"}>
                <Avatar src={celestialIcon} />
                <p>Tiên giới</p>
              </Flex>
              {/* <Flex align="center" gap={"small"}>
                <Avatar src={celestialIcon} />
                <p>Trợ thủ</p>
              </Flex> */}
            </Flex>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
