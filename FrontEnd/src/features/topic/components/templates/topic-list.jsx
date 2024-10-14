import { List } from "antd";
import Topic from "../organisms/topic";
import useTopicData from "../../hooks/useTopicData";

const TopicList = () => {
  const { topicData, loading } = useTopicData();
  return (
    <List
      itemLayout="vertical"
      split={false}
      dataSource={topicData}
      renderItem={(item) => (
        <List.Item>
          <Topic loading={loading} topicData={item}></Topic>
        </List.Item>
      )}
    ></List>
  );
};

export default TopicList;
