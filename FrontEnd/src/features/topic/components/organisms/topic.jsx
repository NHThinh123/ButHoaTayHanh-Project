import BentoBox from "../../../../components/atoms/bento-box";

import SpinLoading from "../../../../components/atoms/spin-loading";
import TopicHeader from "../molecules/topic-header";
import TopicBody from "../molecules/topic-body";
import TopicFooter from "../molecules/topic-footer";

const Topic = ({ loading, topicData }) => {
  if (loading) return <SpinLoading />;
  return (
    <BentoBox padding={28} style={{ margin: "0px 8px" }}>
      <TopicHeader author={topicData.author} uploadAt={topicData.uploadAt} />
      <TopicBody topicData={topicData} />
      <TopicFooter topicData={topicData} />
    </BentoBox>
  );
};

export default Topic;
