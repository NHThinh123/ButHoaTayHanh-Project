import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterInfoApi } from "../services/characterApi";

const useCharacterInfoData = () => {
  const [characterInfoData, setCharacterInfoData] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const fetchCharacterInfoData = async () => {
      try {
        const res = await getCharacterInfoApi(id);

        if (res && !res.message) {
          setCharacterInfoData(res);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacterInfoData();
  }, []);

  return { loading, characterInfoData };
};
export default useCharacterInfoData;
