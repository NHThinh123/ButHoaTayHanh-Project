import { List } from "antd";
import Topic from "../organisms/topic";

const TopicList = () => {
  return (
    <List itemLayout="vertical" size="large">
      <Topic></Topic>
      <Topic></Topic>
      <Topic></Topic>
    </List>
  );
};

export default TopicList;
