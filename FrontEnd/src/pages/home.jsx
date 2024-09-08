import { Col, Row } from "antd";
import BannerList from "../features/home/components/banner-list";
import GuideList from "../features/home/components/guide-list";
import SidebarContent from "../features/home/components/sidebar-content";
import useBannerData from "../features/home/hooks/useBannerData";

import BentoBox from "../components/atoms/bento-box";
import SpinLoading from "../components/atoms/spin-loading";

const HomePage = () => {
  const { bannerData, loading } = useBannerData();

  return (
    <Row>
      <Col span={16}>
        {loading ? (
          <SpinLoading />
        ) : (
          <BentoBox>
            <BannerList bannerData={bannerData} />
          </BentoBox>
        )}

        <GuideList />
      </Col>
      <Col span={8}>
        <BentoBox>
          <SidebarContent />
        </BentoBox>
      </Col>
    </Row>
  );
};

export default HomePage;
