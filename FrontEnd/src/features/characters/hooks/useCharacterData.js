import { useEffect, useState } from "react";
import { getCharacterApi } from "../services/characterApi";

const useCharacterData = () => {
  const [characterData, setCharacterData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await getCharacterApi();
        if (res && !res.message) {
          setCharacterData(res.result);
        }
      } catch (error) {
        console.error("Error fetching character:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacter();
  }, []);

  return { characterData, loading };
};
export default useCharacterData;
