import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/auth.context";
import { Form } from "antd";

const useReplyCommentData = ({ comment }) => {
  const [replyData, setReplyData] = useState(comment.replies || []);
  const [loading, setLoading] = useState(false);
  const { auth } = useContext(AuthContext);
  const [form] = Form.useForm();
  const handleReply = async (values) => {
    const data = {
      content: values.content,
      author: auth.user.id,
      topic: comment.topic,
      likes: [],
      dislikes: [],
      replies: [],
      repliesWithUser: comment.author._id,
    };
  };
  return { replyData };
};

export default useReplyCommentData;
