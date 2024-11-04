import { useCallback, useContext, useState } from "react";
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
  const openModal = () => {
    setShowModalComment(true);
    fetchComment();
  };
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
      fetchComment();
      form.resetFields();
      setCommentCount(commentCount + 1);
    }
  };
  const fetchComment = useCallback(
    async (page = 1, pageSize = 10) => {
      if (!topic) {
        console.error("Topic is undefined");
        return;
      }
      try {
        setLoading(true);
        const res = await getCommentApi(topic._id, filters, page, pageSize);
        if (res && !res.message) {
          setCommentData(res.result);
        }
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    },
    [filters, topic]
  );

  return {
    showModalComment,
    closeModel,
    openModal,
    handleComment,
    loading,
    commentData,
    form,
    commentCount,
  };
};

export default useCommentData;
