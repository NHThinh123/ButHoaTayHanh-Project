import { message } from "antd";
import { debounce } from "lodash";
import { useCallback, useContext, useState } from "react";
import { updateTopicApi } from "../services/topicApi";
import { AuthContext } from "../../../contexts/auth.context";

const useLikeTopic = ({ initialData }) => {
  const { auth } = useContext(AuthContext);
  const [likes, setLikes] = useState(initialData.likes || []);
  const [dislikes, setDislikes] = useState(initialData.dislikes || []);
  const userId = auth?.user?.id;

  // Debounced API calls
  const debouncedApiCall = useCallback(
    debounce(async (action, topicId, newLikes, newDislikes) => {
      try {
        const res = await updateTopicApi(topicId, {
          likes: newLikes,
          dislikes: newDislikes,
        });

        // Update state with server response
        if (res) {
          setLikes(res.likes);
          setDislikes(res.dislikes);
        }
      } catch (error) {
        console.log(error);
        // Khôi phục trạng thái khi có lỗi
        if (action === "like") {
          setLikes((prev) => prev.filter((id) => id !== userId));
        } else {
          setDislikes((prev) => prev.filter((id) => id !== userId));
        }
        message.error("Không thể cập nhật. Vui lòng thử lại.");
      }
    }, 1000),
    [userId]
  );

  const handleInteraction = async (action, topicId) => {
    if (!userId) {
      message.warning("Vui lòng đăng nhập để thực hiện tương tác!");
      return;
    }

    const isLiked = likes.includes(userId);
    const isDisliked = dislikes.includes(userId);

    if (action === "like") {
      let newLikes = [...likes];
      let newDislikes = [...dislikes];

      if (!isLiked) {
        // Thêm like mới
        newLikes = [...likes, userId];
        // Nếu đang dislike thì bỏ dislike
        if (isDisliked) {
          newDislikes = dislikes.filter((id) => id !== userId);
        }
      } else {
        // Bỏ like
        newLikes = likes.filter((id) => id !== userId);
      }

      // Cập nhật UI ngay lập tức (optimistic update)
      setLikes(newLikes);
      setDislikes(newDislikes);

      // Gọi API với mảng likes/dislikes mới
      debouncedApiCall("like", topicId, newLikes, newDislikes);
    } else if (action === "dislike") {
      let newLikes = [...likes];
      let newDislikes = [...dislikes];

      if (!isDisliked) {
        // Thêm dislike mới
        newDislikes = [...dislikes, userId];
        // Nếu đang like thì bỏ like
        if (isLiked) {
          newLikes = likes.filter((id) => id !== userId);
        }
      } else {
        // Bỏ dislike
        newDislikes = dislikes.filter((id) => id !== userId);
      }

      // Cập nhật UI ngay lập tức (optimistic update)
      setLikes(newLikes);
      setDislikes(newDislikes);

      // Gọi API với mảng likes/dislikes mới
      debouncedApiCall("dislike", topicId, newLikes, newDislikes);
    }
  };

  return {
    likes,
    dislikes,
    handleInteraction,
    userId,
  };
};

export default useLikeTopic;
