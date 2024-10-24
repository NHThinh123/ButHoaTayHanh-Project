import { useCallback, useContext, useState } from "react";
import { AuthContext } from "../../../contexts/auth.context";
import { createCommentApi, getCommentApi } from "../services/commentApi";

const useCommentData = () => {
  const [commentData, setCommentData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModalComment, setShowModalComment] = useState(false);
  const { auth } = useContext(AuthContext);
  // eslint-disable-next-line no-unused-vars
  const [filters, setFilters] = useState({
    search: "",
    faction: "",
    role: "",
    rarity: "",
    sort: "",
  });
  const closeModel = () => {
    setShowModalComment(false);
  };
  const openModal = (topicId) => {
    setShowModalComment(true);
    fetchComment(topicId);
    console.log(commentData);
  };
  const onFinishComment = async (values, topicId) => {
    const data = {
      content: values.content,
      author: auth.user.id,
      topic: topicId,
      likes: [],
      dislikes: [],
      replies: [],
    };
    const res = await createCommentApi(data);

    console.log(res);
  };
  const fetchComment = useCallback(
    async (topicId, page = 1, pageSize = 10) => {
      try {
        setLoading(true);
        const res = await getCommentApi(topicId, filters, page, pageSize);
        if (res && !res.message) {
          setCommentData(res.result);
        }
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    },
    [filters]
  );

  return {
    showModalComment,
    closeModel,
    openModal,
    onFinishComment,
    loading,
    commentData,
  };
};

export default useCommentData;
