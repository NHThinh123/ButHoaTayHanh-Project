import BentoBox from "../components/atoms/bento-box";
import SpinLoading from "../components/atoms/spin-loading";
import CharacterList from "../features/characters/components/characterList";
import useCharacterData from "../features/characters/hooks/useCharacterData";
const Character = () => {
  const { characterData, loading } = useCharacterData();

  if (loading) return <SpinLoading />;
  return (
    <BentoBox padding={16}>
      <h1 style={{ marginBottom: "24px", fontSize: 36 }}>Danh sách tướng</h1>

      <CharacterList characterData={characterData} />
    </BentoBox>
  );
};
export default Character;
