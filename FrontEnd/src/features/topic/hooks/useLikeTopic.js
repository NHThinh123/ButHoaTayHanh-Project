import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../contexts/auth.context";
import { notification } from "antd";
import { dislikeTopicApi, likeTopicApi } from "../services/topicApi";

const useLikeTopic = ({ topic }) => {
  const { auth } = useContext(AuthContext);
  const [likes, setLikes] = useState(topic.likes.length);
  const [dislikes, setDislikes] = useState(topic.dislikes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const user = auth?.user;

  const handleLike = async () => {
    if (!user) {
      notification.error({
        message: "Đăng nhập",
        description: "Vui lòng đăng nhập để tương tác",
      });
      return;
    }
    if (isLoading) return;
    // Lưu trạng thái cũ để rollback nếu có lỗi
    const previousLikes = likes;
    const previousDislikes = dislikes;
    const previousIsLiked = isLiked;
    const previousIsDisliked = isDisliked;

    // Optimistic update
    setIsLoading(true);
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
      const res = await likeTopicApi(topic._id);
      if (res) {
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
      setIsLoading(false);
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

    if (isLoading) return;

    // Lưu trạng thái cũ để rollback nếu có lỗi
    const previousLikes = likes;
    const previousDislikes = dislikes;
    const previousIsLiked = isLiked;
    const previousIsDisliked = isDisliked;

    // Optimistic update
    setIsLoading(true);
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
      const res = await dislikeTopicApi(topic._id);
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
      setIsLoading(false);
    }
  };
  //lần đầu load trang sẽ kiểm tra xem người ùng đã like hay chưa, nếu đã like thì sẽ cập nhật lại biến isLiked
  useEffect(() => {
    if (user) {
      setIsLiked(topic.likes.includes(user.id));
      setIsDisliked(topic.dislikes.includes(user.id));
    }
  }, [topic.likes, topic.dislikes]);

  return {
    likes,
    dislikes,
    isLiked,
    isDisliked,
    user,
    handleLike,
    handleDislike,
  };
};

export default useLikeTopic;
