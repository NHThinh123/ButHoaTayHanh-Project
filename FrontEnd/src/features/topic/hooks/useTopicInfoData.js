import { useEffect, useState } from "react";
import { getTopicInfoApi } from "../services/topicApi";

const useTopicInfoData = (id) => {
  const [topicInfoData, setTopicInfoData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopicInfoData = async () => {
      try {
        const res = await getTopicInfoApi(id);
        if (res && !res.message) {
          setTopicInfoData(res);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTopicInfoData();
  }, []);

  return { topicInfoData, loading };
};

export default useTopicInfoData;
