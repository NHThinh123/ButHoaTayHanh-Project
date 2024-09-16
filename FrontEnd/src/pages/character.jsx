import BentoBox from "../components/atoms/bento-box";

import CharacterFilter from "../features/characters/components/character-filter";
import CharacterList from "../features/characters/components/characterList";
import useCharacterData from "../features/characters/hooks/useCharacterData";
const Character = () => {
  const { characterData, handleFilterChange } = useCharacterData();

  return (
    <BentoBox padding={16}>
      <h1 style={{ marginBottom: "24px", fontSize: 36 }}>Danh sách tướng</h1>
      <CharacterFilter handleFilterChange={handleFilterChange} />
      <CharacterList characterData={characterData} />
    </BentoBox>
  );
};
export default Character;
