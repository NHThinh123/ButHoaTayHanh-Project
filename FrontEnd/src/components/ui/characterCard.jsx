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
          <Flex justify="center" align="center" vertical>
            <div
              style={{
                fontSize: 20,
                fontWeight: "700",
                overflow: "hidden",
                width: "90%",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Natra
            </div>

            <Flex justify="center" align="center" gap={"small"}>
              <Avatar src={celestialIcon} />
              <p>Tiên giới</p>
            </Flex>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
