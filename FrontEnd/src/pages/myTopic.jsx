import { Col, Row } from "antd";

import TopicList from "../features/topic/components/templates/topic-list";
import useTopicData from "../features/topic/hooks/useTopicData";
import { useContext, useEffect } from "react";
import TopicTool from "../features/topic/components/organisms/topicTool";
import { AuthContext } from "../contexts/auth.context";

const MyTopicPage = () => {
  const { topicData, loadMoreData, hasMore, handleFilterChange, deleteTopic } =
    useTopicData(true);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    handleFilterChange(auth.user.id, "author");
    window.scrollTo({
      top: 0,
      behavior: "instant", // hoặc "smooth" nếu bạn muốn có hiệu ứng scroll
    });
  }, []);
  return (
    <Row>
      <Col span={16}>
        <TopicList
          deleteTopic={deleteTopic}
          data={topicData}
          loadMoreData={loadMoreData}
          hasMore={hasMore}
          filter={true}
        />
      </Col>
      <Col span={8}>
        <TopicTool handleFilterChange={handleFilterChange} />
      </Col>
    </Row>
  );
};

export default MyTopicPage;
