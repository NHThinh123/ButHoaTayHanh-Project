import { Flex, Space, Tag, Typography } from "antd";

import DefaultTitle from "../../../../components/atoms/default-title";
import DefaultText from "../../../../components/atoms/default-text";

import BentoBox from "../../../../components/atoms/bento-box";
import CharacterAnalysis from "../molecules/character-analysis";

const CharacterDescription = ({ descriptionData }) => {
  return (
    <BentoBox padding={16} height={450}>
      <div
        style={{
          height: "100%",
          overflow: "auto",
          scrollbarWidth: "none",
        }}
      >
        <Flex vertical gap={"small"}>
          <Typography.Title style={{ padding: 0, fontWeight: 700 }}>
            {descriptionData.name}
          </Typography.Title>
          <Space>
            <DefaultTitle>Phẩm chất: </DefaultTitle>
            <Tag
              color={
                descriptionData.rarity === "SSR"
                  ? "gold"
                  : descriptionData.rarity === "SR"
                  ? "purple"
                  : "blue"
              }
              style={{ fontSize: 16 }}
            >
              {descriptionData.rarity}
            </Tag>
          </Space>

          <Space>
            <DefaultTitle>Vai trò: </DefaultTitle>
            <Tag style={{ fontSize: 16 }}>{descriptionData.role}</Tag>
          </Space>

          <Space>
            <DefaultTitle>Phe: </DefaultTitle>
            <Tag
              color={
                descriptionData.faction === "Tiên giới"
                  ? "blue"
                  : descriptionData.faction === "Nhân giới"
                  ? "green"
                  : descriptionData.faction === "Yêu giới"
                  ? "red"
                  : descriptionData.faction === "Thánh giới"
                  ? "gold"
                  : "purple"
              }
              style={{ fontSize: 16 }}
            >
              {descriptionData.faction}
            </Tag>
          </Space>

          <DefaultTitle>Cốt truyện: </DefaultTitle>
          <DefaultText>{descriptionData.story}</DefaultText>

          <DefaultTitle>Đánh giá sức mạnh:</DefaultTitle>
          <CharacterAnalysis
            PvpScore={descriptionData.PvpScore}
            PveScore={descriptionData.PveScore}
          />
        </Flex>
      </div>
    </BentoBox>
  );
};
export default CharacterDescription;
