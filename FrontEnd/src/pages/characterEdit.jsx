import { useParams } from "react-router-dom";
import CharacterForm from "../features/characters/components/templates/character-form";
import useCharacterInfoData from "../features/characters/hooks/useCharacterInfoData";

const transformCharacterData = (data) => {
  if (!data || !data.skills) return data;

  return {
    ...data,
    skills: data.skills.map((skill) => ({
      ...skill,
      effectSkill: skill.effectSkill.map((effect) => effect._id),
    })),
  };
};

const CharacterEditPage = () => {
  const { id } = useParams();
  const { characterInfoData } = useCharacterInfoData(id);

  // Chuyển đổi dữ liệu
  const transformedData = transformCharacterData(characterInfoData);

  return (
    <CharacterForm
      mode={"edit"}
      initialValues={transformedData}
      id={id}
    ></CharacterForm>
  );
};

export default CharacterEditPage;
