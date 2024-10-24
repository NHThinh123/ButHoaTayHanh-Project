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
      const response = await getTopicApi(filters, currentPage, 3); // Gọi API, lấy 3 topic mỗi lần
      if (response && response.result) {
        setTopicData((prevData) => [...prevData, ...response.result]); // Thêm data mới vào
        setHasMore(currentPage < response.totalPages); // Kiểm tra nếu còn dữ liệu để tải
        setCurrentPage((prevPage) => prevPage + 1); // Tăng trang hiện tại lên
      }
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMoreData(); // Tải dữ liệu lần đầu
  }, []);

  return { topicData, loading, loadMoreData, hasMore };
};

export default useTopicData;
