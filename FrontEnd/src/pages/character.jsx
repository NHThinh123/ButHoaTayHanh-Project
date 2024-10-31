import { Button, Flex } from "antd";
import BentoBox from "../components/atoms/bento-box";
import CharacterFilter from "../features/characters/components/molecules/character-filter";
import CharacterList from "../features/characters/components/templates/characterList";

import useCharacterData from "../features/characters/hooks/useCharacterData";
import { PlusOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";
import DefaultTitle from "../components/atoms/default-title";
const Character = () => {
  const { characterData, handleFilterChange } = useCharacterData();
  const { auth } = useContext(AuthContext);
  return (
    <BentoBox
      padding={28}
      style={{
        minHeight: "100vh",
      }}
    >
      {auth?.user?.role !== "admin" ? (
        <Flex
          justify="space-between"
          align="center"
          style={{ padding: "0px 8px", marginBottom: 24 }}
        >
          <DefaultTitle
            style={{
              fontSize: 36,
              textAlign: "center",
            }}
          >
            Danh sách tướng
          </DefaultTitle>
          <Button size="large" type="primary" href="/character/create">
            <PlusOutlined />
            Thêm tướng
          </Button>
        </Flex>
      ) : (
        <DefaultTitle style={{ marginBottom: "24px", fontSize: 36 }}>
          Danh sách tướng
        </DefaultTitle>
      )}
      <CharacterFilter handleFilterChange={handleFilterChange} />
      <CharacterList characterData={characterData} />
    </BentoBox>
  );
};
export default Character;
