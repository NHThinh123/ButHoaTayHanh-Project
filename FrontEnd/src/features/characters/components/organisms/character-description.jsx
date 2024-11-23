import { Button, Flex, Space, Typography } from "antd";

import DefaultTitle from "../../../../components/atoms/default-title";
import DefaultText from "../../../../components/atoms/default-text";

import BentoBox from "../../../../components/atoms/bento-box";
import CharacterAnalysis from "../molecules/character-analysis";
import TagCustom from "../../../../components/atoms/tag-custom";
import { useContext } from "react";
import { AuthContext } from "../../../../contexts/auth.context";

const CharacterDescription = ({ descriptionData, deleteCharacter }) => {
  const { auth } = useContext(AuthContext);

  return (
    <BentoBox padding={28} height={450} backgroundColor="#fff">
      <div
        style={{
          height: "100%",
          overflow: "auto",
          scrollbarWidth: "none",
        }}
      >
        <Flex vertical gap={"small"}>
          <Typography.Title
            level={2}
            style={{
              padding: 0,
              fontWeight: 700,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {descriptionData.name}
            {auth?.user?.role === "admin" && (
              <Button
                color="danger"
                variant="solid"
                style={{ padding: "8px 26px" }}
                onClick={() => deleteCharacter(descriptionData._id)}
              >
                Xóa
              </Button>
            )}
          </Typography.Title>

          <Space>
            <DefaultTitle>Phẩm chất: </DefaultTitle>
            <TagCustom
              color={
                descriptionData.rarity === "SSR"
                  ? "gold"
                  : descriptionData.rarity === "SR"
                  ? "purple"
                  : "blue"
              }
            >
              {descriptionData.rarity}
            </TagCustom>
          </Space>

          <Space>
            <DefaultTitle>Vai trò: </DefaultTitle>
            <TagCustom>{descriptionData.role}</TagCustom>
          </Space>

          <Space>
            <DefaultTitle>Phe: </DefaultTitle>
            <TagCustom
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
            </TagCustom>
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
