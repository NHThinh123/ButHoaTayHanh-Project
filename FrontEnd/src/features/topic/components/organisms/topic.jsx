import BentoBox from "../../../../components/atoms/bento-box";

import TopicHeader from "../molecules/topic-header";
import TopicBody from "../molecules/topic-body";
import TopicFooter from "../molecules/topic-footer";

const Topic = ({ topicData }) => {
  return (
    <BentoBox padding={28} style={{ margin: "0px 8px" }}>
      <TopicHeader author={topicData.author} uploadAt={topicData.uploadAt} />
      <TopicBody topicData={topicData} />
      <TopicFooter topicData={topicData} />
    </BentoBox>
  );
};

export default Topic;
