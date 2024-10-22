import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/auth.context";
import { createCommentApi } from "../services/commentApi";

const useCommentData = () => {
  const [showModalComment, setShowModalComment] = useState(false);
  const { auth } = useContext(AuthContext);
  const closeModel = () => {
    setShowModalComment(false);
  };
  const openModal = () => {
    setShowModalComment(true);
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
  return { showModalComment, closeModel, openModal, onFinishComment };
};

export default useCommentData;
