import BentoBox from "../../../../components/atoms/bento-box";

import TopicHeader from "../molecules/topic-header";
import TopicBody from "../molecules/topic-body";
import TopicFooter from "../molecules/topic-footer";

const Topic = ({ topicData, deleteTopic }) => {
  return (
    <BentoBox padding={28} style={{ margin: "0px 8px" }}>
      <TopicHeader
        deleteTopic={deleteTopic}
        topicData={topicData}
        author={topicData.author}
        uploadAt={topicData.uploadAt}
        category={topicData.category}
      />
      <TopicBody topicData={topicData} />
      <TopicFooter topicData={topicData} />
    </BentoBox>
  );
};

export default Topic;
