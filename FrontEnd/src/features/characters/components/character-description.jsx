import { Space, Tag, Typography } from "antd";
import BentoBox from "../../../components/atoms/bento-box";
import DefaultTitle from "../../../components/atoms/default-title";
import DefaultText from "../../../components/atoms/default-text";
import CharacterAnalysis from "./character-analysis";

const CharacterDescription = () => {
  return (
    <BentoBox
      padding={16}
      height={450}
      style={{ overflow: "auto", scrollbarWidth: "none" }}
    >
      <Typography.Title style={{ fontWeight: 700 }}>Natra</Typography.Title>
      <Space>
        <DefaultTitle>Phẩm chất: </DefaultTitle>
        <Tag color="gold" style={{ fontSize: 16 }}>
          SSR
        </Tag>
      </Space>
      <br />
      <Space>
        <DefaultTitle>Vai trò: </DefaultTitle>
        <Tag style={{ fontSize: 16 }}>Trợ thủ</Tag>
      </Space>
      <br />
      <Space>
        <DefaultTitle>Phe: </DefaultTitle>
        <Tag color="blue" style={{ fontSize: 16 }}>
          Tiên giới
        </Tag>
      </Space>
      <br />
      <DefaultTitle>Cốt truyện: </DefaultTitle>
      <DefaultText>
        Là con của Lý Tịnh và có 2 người anh em là Kim tra và Mộc Tra, bản thân
        sở hữu nhiều thần khí nên có sức mạnh vô cùng to lớn
      </DefaultText>
      <br />
      <CharacterAnalysis PvpScore={5} PveScore={3.5} />
    </BentoBox>
  );
};
export default CharacterDescription;
