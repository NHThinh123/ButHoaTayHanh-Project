import SpinLoading from "../components/atoms/spin-loading";
import CharacterDetail from "../features/characters/components/templates/character-detail";
import useCharacterInfoData from "../features/characters/hooks/useCharacterInfoData";
const CharacterInfoPage = () => {
  const { loading, characterInfoData } = useCharacterInfoData();

  if (loading) return <SpinLoading />;

  return (
    <div>
      <CharacterDetail characterInfoData={characterInfoData} />
    </div>
  );
};

export default CharacterInfoPage;
