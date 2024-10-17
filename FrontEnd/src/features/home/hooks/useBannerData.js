import { useEffect, useState } from "react";
import { getTopicApi } from "../../topic/services/topicApi";

const useBannerData = () => {
  const [bannerData, setBannerData] = useState([]);
  const [loading, setLoading] = useState(true); // Trạng thái tải
  useEffect(() => {
    const fetchTopic = async () => {
      try {
        const res = await getTopicApi({}, 1, 5);

        if (res && !res?.message) {
          setBannerData(res.result);
          //  console.log(bannerData);
        }
      } catch (error) {
        console.error("Error fetching topic:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTopic();
  }, []);

  return { bannerData, loading };
};

export default useBannerData;
