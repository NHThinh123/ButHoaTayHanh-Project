import { useEffect, useState } from "react";

import { getCharacterInfoApi } from "../services/characterApi";

const useCharacterInfoData = (id) => {
  const [characterInfoData, setCharacterInfoData] = useState({});
  const [loading, setLoading] = useState(true);

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
  }, [id]);

  return { loading, characterInfoData };
};
export default useCharacterInfoData;
