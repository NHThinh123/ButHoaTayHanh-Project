import { useEffect, useState } from "react";
import { getTopicApi } from "../services/topicApi";

const useTopicData = () => {
  const [loading, setLoading] = useState(false);
  const [topicData, setTopicData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [hasMore, setHasMore] = useState(true);

  // eslint-disable-next-line no-unused-vars
  const [filters, setFilters] = useState({
    search: "",
    faction: "",
    role: "",
    rarity: "",
    sort: "",
  });
  const loadMoreData = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await getTopicApi(filters, currentPage, 4);
      if (response && response.result) {
        // Nếu là trang đầu tiên, thay thế hoàn toàn dữ liệu
        if (currentPage === 1) {
          setTopicData(response.result);
        } else {
          // Nếu không phải trang đầu, thêm dữ liệu mới vào
          setTopicData((prevData) => [...prevData, ...response.result]);
        }
        setHasMore(currentPage < response.totalPages);
        setCurrentPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error("Error fetching topics:", error);
    } finally {
      setLoading(false);
    }
  };
  const loadInitData = async () => {
    setCurrentPage(1);
    setTopicData([]);
    await loadMoreData(); // Tải dữ liệu lần đầu
  };
  useEffect(() => {
    loadInitData();
  }, []);

  return { topicData, loading, loadMoreData, hasMore };
};

export default useTopicData;
