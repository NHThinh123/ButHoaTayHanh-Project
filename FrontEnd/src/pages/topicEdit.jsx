import { useParams } from "react-router-dom";
import TopicForm from "../features/topic/components/organisms/topic-form";
import useTopicInfoData from "../features/topic/hooks/useTopicInfoData";

const TopicEditPage = () => {
  const { id } = useParams();
  const { topicInfoData, loading } = useTopicInfoData(id);
  if (loading) return <div>Loading...</div>;
  return <TopicForm mode={"edit"} initialValues={topicInfoData} id={id} />;
};

export default TopicEditPage;
