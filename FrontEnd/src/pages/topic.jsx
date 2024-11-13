import { Col, Row } from "antd";

import TopicList from "../features/topic/components/templates/topic-list";
import useTopicData from "../features/topic/hooks/useTopicData";
import { useEffect } from "react";
import TopicTool from "../features/topic/components/organisms/topicTool";

const TopicPage = () => {
  const { topicData, loadMoreData, hasMore, handleFilterChange, filters } =
    useTopicData();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant", // hoặc "smooth" nếu bạn muốn có hiệu ứng scroll
    });
  }, [filters]);
  return (
    <Row>
      <Col span={16}>
        <TopicList
          data={topicData}
          loadMoreData={loadMoreData}
          hasMore={hasMore}
        />
      </Col>
      <Col span={8}>
        <TopicTool handleFilterChange={handleFilterChange} />
      </Col>
    </Row>
  );
};

export default TopicPage;
