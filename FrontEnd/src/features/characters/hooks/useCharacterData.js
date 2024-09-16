import { useEffect, useState, useCallback } from "react";
import { getCharacterApi } from "../services/characterApi";

const useCharacterData = () => {
  const [characterData, setCharacterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: "",
    role: "",
    rarity: "",
    sort: "",
  });

  const fetchCharacters = useCallback(
    async (page = 1, pageSize = 10) => {
      try {
        setLoading(true);
        const res = await getCharacterApi(filters, page, pageSize);
        if (res && !res.message) {
          setCharacterData(res.result);
        }
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    },
    [filters]
  );

  const handleFilterChange = useCallback((value, name) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  }, []);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return { characterData, loading, handleFilterChange };
};

export default useCharacterData;
