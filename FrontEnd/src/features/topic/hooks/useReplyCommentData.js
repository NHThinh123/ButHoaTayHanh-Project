import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../../contexts/auth.context";
import { Form } from "antd";
import { replyCommentApi } from "../services/commentApi";

const useReplyCommentData = ({ comment }) => {
  const [replyData, setReplyData] = useState(comment.replies || []);
  // const [loading, setLoading] = useState(false);
  const { auth } = useContext(AuthContext);
  const [showReplyForm, setShowReplyForm] = useState(false); // Trạng thái hiển thị form phản hồi
  const [form] = Form.useForm();
  const textAreaRef = useRef(null); // Tạo ref cho TextArea
  const handleReplyClick = () => {
    setShowReplyForm(!showReplyForm); // Hiện form phản hồi
    setTimeout(() => {
      textAreaRef.current?.focus(); // Focus vào TextArea khi form hiện ra
    }, 0);
  };

  const handleReply = async (values) => {
    const data = {
      content: values.content,
      author: auth.user.id,
      likes: [],
      dislikes: [],
      replies: [],
      repliesWithUser: comment.author._id,
    };
    const res = await replyCommentApi(comment._id, data);

    if (res) {
      setReplyData((prevData) => [res, ...prevData]);
      form.resetFields();
      setShowReplyForm(!showReplyForm);
    }
  };
  return {
    replyData,
    handleReply,
    form,
    handleReplyClick,
    textAreaRef,
    showReplyForm,
  };
};

export default useReplyCommentData;
