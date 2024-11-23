import { useEffect, useState, useCallback } from "react";
import { deleteCharacterApi, getCharacterApi } from "../services/characterApi";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const useCharacterData = () => {
  const [characterData, setCharacterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: "",
    faction: "",
    role: "",
    rarity: "",
    sort: "",
  });
  const navigate = useNavigate();

  const fetchCharacters = useCallback(
    async (page = 1, pageSize = 20) => {
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
  const deleteCharacter = async (id) => {
    try {
      const response = await deleteCharacterApi(id);
      if (response) {
        console.log(response);
        setCharacterData((prevData) =>
          prevData.filter((topic) => topic._id !== id)
        );
        message.success("Xóa bài viết thành công");
        navigate("/character");
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return {
    characterData,
    loading,
    handleFilterChange,
    filters,
    deleteCharacter,
  };
};

export default useCharacterData;
