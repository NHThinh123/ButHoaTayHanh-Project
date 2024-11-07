import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/auth.context";
import { notification } from "antd";
import { dislikeCommentApi, likeCommentApi } from "../services/commentApi";

const useLikeCommentData = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);
  //likeComment
  const [likes, setLikes] = useState(comment.likes.length);
  const [dislikes, setDislikes] = useState(comment.dislikes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const { auth } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const user = auth?.user;
  const handleLike = async () => {
    if (!user) {
      notification.error({
        message: "Đăng nhập",
        description: "Vui lòng đăng nhập để tương tác",
      });
      return;
    }
    if (loading) return;
    // Lưu trạng thái cũ để rollback nếu có lỗi
    const previousLikes = likes;
    const previousDislikes = dislikes;
    const previousIsLiked = isLiked;
    const previousIsDisliked = isDisliked;

    // Optimistic update
    setLoading(true);
    if (isLiked) {
      setLikes((prev) => prev - 1);
      setIsLiked(false);
    } else {
      setLikes((prev) => prev + 1);
      if (isDisliked) {
        setDislikes((prev) => prev - 1);
      }
      setIsLiked(true);
      setIsDisliked(false);
    }
    try {
      const res = await likeCommentApi(comment._id);
      if (res) {
        console.log(res);
        setLikes(res.likes.length);
        setDislikes(res.dislikes.length);
        setIsLiked(res.likes.includes(user.id));
        setIsDisliked(false);
      }
    } catch (error) {
      setLikes(previousLikes);
      setDislikes(previousDislikes);
      setIsLiked(previousIsLiked);
      setIsDisliked(previousIsDisliked);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const handleDislike = async () => {
    if (!user) {
      notification.error({
        message: "Đăng nhập",
        description: "Vui lòng đăng nhập để tương tác",
      });
      return;
    }

    if (loading) return;

    // Lưu trạng thái cũ để rollback nếu có lỗi
    const previousLikes = likes;
    const previousDislikes = dislikes;
    const previousIsLiked = isLiked;
    const previousIsDisliked = isDisliked;

    // Optimistic update
    setLoading(true);
    if (isDisliked) {
      setDislikes((prev) => prev - 1);
      setIsDisliked(false);
    } else {
      setDislikes((prev) => prev + 1);
      if (isLiked) {
        setLikes((prev) => prev - 1);
      }
      setIsDisliked(true);
      setIsLiked(false);
    }
    try {
      const res = await dislikeCommentApi(comment._id);
      if (res) {
        setLikes(res.likes.length);
        setDislikes(res.dislikes.length);
        setIsLiked(false);
        setIsDisliked(res.dislikes.includes(user.id));
      }
    } catch (error) {
      // Rollback nếu có lỗi
      setLikes(previousLikes);
      setDislikes(previousDislikes);
      setIsLiked(previousIsLiked);
      setIsDisliked(previousIsDisliked);

      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setIsLiked(comment.likes.includes(user?.id));
    setIsDisliked(comment.dislikes.includes(user?.id));
    setLikes(comment.likes.length);
    setDislikes(comment.dislikes.length);
  }, [comment, user?.id]);
  return {
    handleLike,
    handleDislike,
    isDisliked,
    isLiked,
    likes,
    dislikes,
    showReplies,
    setShowReplies,
  };
};

export default useLikeCommentData;
