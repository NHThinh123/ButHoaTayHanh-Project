import { useParams } from "react-router-dom";
import SpinLoading from "../components/atoms/spin-loading";
import CharacterDetail from "../features/characters/components/templates/character-detail";
import useCharacterData from "../features/characters/hooks/useCharacterData";
import useCharacterInfoData from "../features/characters/hooks/useCharacterInfoData";
const CharacterInfoPage = () => {
  const { id } = useParams();
  const { loading, characterInfoData } = useCharacterInfoData(id);
  const { deleteCharacter } = useCharacterData();
  if (loading) return <SpinLoading />;

  return (
    <div>
      <CharacterDetail
        characterInfoData={characterInfoData}
        deleteCharacter={deleteCharacter}
      />
    </div>
  );
};

export default CharacterInfoPage;
