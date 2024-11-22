import { Col, Row, Skeleton } from "antd";
import BannerList from "../features/home/components/banner-list";

import SidebarContent from "../features/home/components/sidebar-content";

import BentoBox from "../components/atoms/bento-box";

import TopicList from "../features/topic/components/templates/topic-list";
import useTopicData from "../features/topic/hooks/useTopicData";
import { useEffect } from "react";

const HomePage = () => {
  const { topicData, loading, loadMoreData, hasMore, deleteTopic } =
    useTopicData();
  const newTopic = topicData?.slice(0, 4);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant", // hoặc "smooth" nếu muốn có hiệu ứng scroll
    });
  }, []);
  return (
    <Row>
      <Col span={16}>
        {loading ? (
          <Skeleton
            avatar
            paragraph={{
              rows: 1,
            }}
            active
            style={{
              minHeight: "480px",
            }}
          />
        ) : (
          <BentoBox>
            <BannerList bannerData={newTopic} />
          </BentoBox>
        )}

        <TopicList
          data={topicData}
          loadMoreData={loadMoreData}
          hasMore={hasMore}
          deleteTopic={deleteTopic}
        />
      </Col>
      <Col span={8} style={{ paddingTop: 8 }}>
        <SidebarContent data={newTopic} />
      </Col>
    </Row>
  );
};

export default HomePage;
