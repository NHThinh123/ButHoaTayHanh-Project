import { message } from "antd";
import axios from "axios";
import { debounce } from "lodash";
import { useCallback, useState } from "react";

const useLikeTopic = ({ initialData }) => {
  const [likes, setLikes] = useState(initialData.likes || []);
  const [dislikes, setDislikes] = useState(initialData.dislikes || []);
  const [userInteraction, setUserInteraction] = useState({
    liked: false,
    disliked: false,
  });

  // Debounced API calls
  const debouncedApiCall = useCallback(
    debounce(async (action, topicId, data) => {
      try {
        const response = await axios.patch(
          `/api/topics/${topicId}/interaction`,
          {
            action,
            ...data,
          }
        );

        // Update state with server response
        if (response.data.success) {
          setLikes(response.data.likes);
          setDislikes(response.data.dislikes);
        }
      } catch (error) {
        // Lỗi sẽ khôi phuc lại trạng thái ban đầu
        if (action === "like") {
          setLikes((prev) => prev.filter((id) => id !== data.userId));
          setUserInteraction((prev) => ({ ...prev, liked: false }));
        } else {
          setDislikes((prev) => prev.filter((id) => id !== data.userId));
          setUserInteraction((prev) => ({ ...prev, disliked: false }));
        }
        message.error("Không thể cập nhật. Vui lòng thử lại.");
      }
    }, 1000),
    []
  );

  const handleInteraction = async (action, topicId, userId) => {
    if (!userId) {
      message.warning("Vui lòng đăng nhập để thực hiện tương tác!");
      return;
    }

    if (action === "like") {
      // Optimistic update
      if (!userInteraction.liked) {
        setLikes((prev) => [...prev, userId]);
        if (userInteraction.disliked) {
          setDislikes((prev) => prev.filter((id) => id !== userId));
          setUserInteraction({ liked: true, disliked: false });
        } else {
          setUserInteraction((prev) => ({ ...prev, liked: true }));
        }
      } else {
        setLikes((prev) => prev.filter((id) => id !== userId));
        setUserInteraction((prev) => ({ ...prev, liked: false }));
      }

      // Queue API call
      debouncedApiCall("like", topicId, {
        userId,
        liked: !userInteraction.liked,
        disliked: false,
      });
    } else if (action === "dislike") {
      if (!userInteraction.disliked) {
        setDislikes((prev) => [...prev, userId]);
        if (userInteraction.liked) {
          setLikes((prev) => prev.filter((id) => id !== userId));
          setUserInteraction({ liked: false, disliked: true });
        } else {
          setUserInteraction((prev) => ({ ...prev, disliked: true }));
        }
      } else {
        setDislikes((prev) => prev.filter((id) => id !== userId));
        setUserInteraction((prev) => ({ ...prev, disliked: false }));
      }

      // Queue API call
      debouncedApiCall("dislike", topicId, {
        userId,
        liked: false,
        disliked: !userInteraction.disliked,
      });
    }
  };

  return {
    likes,
    dislikes,
    userInteraction,
    handleInteraction,
  };
};

export default useLikeTopic;
