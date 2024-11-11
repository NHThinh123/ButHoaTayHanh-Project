import { Col, Row } from "antd";

import TopicList from "../features/topic/components/templates/topic-list";
import useTopicData from "../features/topic/hooks/useTopicData";
import { useEffect } from "react";

const TopicPage = () => {
  const { topicData, loadMoreData, hasMore } = useTopicData();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant", // hoặc "smooth" nếu bạn muốn có hiệu ứng scroll
    });
  }, []);
  return (
    <Row>
      <Col span={16}>
        <TopicList
          data={topicData}
          loadMoreData={loadMoreData}
          hasMore={hasMore}
        />
      </Col>
    </Row>
  );
};

export default TopicPage;
