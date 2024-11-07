import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/auth.context";
import { getCommentApi } from "../services/commentApi";
import { commentTopicApi } from "../services/topicApi";
import { Form } from "antd";

const useCommentData = ({ topic }) => {
  const [commentData, setCommentData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModalComment, setShowModalComment] = useState(false);
  const [form] = Form.useForm();
  const { auth } = useContext(AuthContext);
  const [commentCount, setCommentCount] = useState(topic.comments.length);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 5;

  const [filters, setFilters] = useState({
    search: "",
    faction: "",
    role: "",
    rarity: "",
    sort: "",
  });

  const handleComment = async (values) => {
    const data = {
      content: values.content,
      author: auth.user.id,
      topic: topic._id,
      likes: [],
      dislikes: [],
      replies: [],
    };
    const res = await commentTopicApi(topic._id, data);

    if (res) {
      console.log(res);
      setCommentData((prevData) => [res, ...prevData]);

      form.resetFields();
      setCommentCount(commentCount + 1);
    }
  };
  const loadInitialData = async () => {
    setLoading(true);
    await loadMore();
    setLoading(false);
  };

  const loadMore = async () => {
    try {
      const response = await getCommentApi(topic._id, filters, page, PAGE_SIZE); // Gọi API, lấy 4 topic mỗi lần
      if (response && response.result) {
        setCommentData((prevData) => [...prevData, ...response.result]); // Thêm data mới vào
        setHasMore(page < response.totalPages); // Kiểm tra nếu còn dữ liệu để tải
        setPage((prevPage) => prevPage + 1); // Tăng trang hiện tại lên
      }
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

  const closeModel = () => {
    setShowModalComment(false);
    // Reset state khi đóng modal
    setPage(1);
    setCommentData([]);
    setHasMore(true);
  };

  const openModal = () => {
    setShowModalComment(true);
    loadInitialData();
  };

  return {
    setFilters,
    showModalComment,
    closeModel,
    openModal,
    handleComment,
    loading,
    commentData,
    form,
    commentCount,
    hasMore,
    loadMore,
  };
};

export default useCommentData;
