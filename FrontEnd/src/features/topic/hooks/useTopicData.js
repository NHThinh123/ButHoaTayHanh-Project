import { useEffect, useState } from "react";
import { getTopicApi } from "../services/topicApi";

const useTopicData = () => {
  const [loading, setLoading] = useState(true);
  const [topicData, setTopicData] = useState([]);
  useEffect(() => {
    const fetchTopic = async () => {
      try {
        const res = await getTopicApi();

        if (res && !res?.message) {
          setTopicData(res);
          //console.log(res);
        }
      } catch (error) {
        console.error("Error fetching topic:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTopic();
  }, []);

  return { topicData, loading };
};

export default useTopicData;
