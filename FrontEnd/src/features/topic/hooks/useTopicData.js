import { useContext, useEffect, useState } from "react";
import { deleteTopicApi, getTopicApi } from "../services/topicApi";
import { message } from "antd";
import { AuthContext } from "../../../contexts/auth.context";

const useTopicData = (isMyPost) => {
  const [loading, setLoading] = useState(false);
  const [topicData, setTopicData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [hasMore, setHasMore] = useState(true);

  const { auth } = useContext(AuthContext);
  const [filters, setFilters] = useState({
    search: "",
    sort: "",
    category: "",
    filterBy: "mostFeatured",
    author: isMyPost ? auth.user.id : "",
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

  const handleFilterChange = (value, name) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    console.log(filters);
    setCurrentPage(1);
  };

  const loadInitData = async () => {
    setCurrentPage(1);
    setTopicData([]);
    await loadMoreData(); // Tải dữ liệu lần đầu
  };

  const deleteTopic = async (id) => {
    try {
      const response = await deleteTopicApi(id);
      if (response) {
        console.log(response);
        setTopicData((prevData) =>
          prevData.filter((topic) => topic._id !== id)
        );
        message.success("Xóa bài viết thành công");
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    loadInitData();
  }, [filters]);

  return {
    topicData,
    loading,
    loadMoreData,
    hasMore,
    handleFilterChange,
    filters,
    deleteTopic,
  };
};

export default useTopicData;
