import { Col, Row } from "antd";
import BannerList from "../features/home/components/banner-list";

import SidebarContent from "../features/home/components/sidebar-content";
import useBannerData from "../features/home/hooks/useBannerData";

import BentoBox from "../components/atoms/bento-box";
import SpinLoading from "../components/atoms/spin-loading";
import TopicList from "../features/topic/components/templates/topic-list";

const HomePage = () => {
  const { bannerData, loading } = useBannerData();

  return (
    <Row>
      <Col span={16}>
        {loading ? (
          <SpinLoading />
        ) : (
          <BentoBox>
            <BannerList bannerData={bannerData?.slice(0, 5)} />
          </BentoBox>
        )}

        <TopicList />
      </Col>
      <Col span={8} style={{ paddingTop: 8 }}>
        <SidebarContent />
      </Col>
    </Row>
  );
};

export default HomePage;
