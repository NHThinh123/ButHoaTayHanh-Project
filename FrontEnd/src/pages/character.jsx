import BentoBox from "../components/atoms/bento-box";
import CharacterList from "../features/characters/components/characterList";
const Character = () => {
  return (
    <BentoBox padding={16}>
      <h1 style={{ marginBottom: "24px", fontSize: 36 }}>Danh sách tướng</h1>

      <CharacterList />
    </BentoBox>
  );
};
export default Character;
