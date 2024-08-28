import { Col, Row } from "antd";
import BannerList from "../features/home/components/banner-list";
import GuideList from "../features/home/components/guide-list";
import SidebarContent from "../features/home/components/sidebar-content";
import useBannerData from "../features/home/hooks/useBannerData";
import SpinLoading from "../components/atoms/spin-loading";

const HomePage = () => {
  const { bannerData, loading } = useBannerData();
  if (loading) {
    return <SpinLoading size="large" />;
  }

  return (
    <Row>
      <Col span={16} style={{ paddingRight: "16px" }}>
        <BannerList bannerData={bannerData} />
        <GuideList />
      </Col>
      <Col span={8} style={{ padding: "0px" }}>
        <SidebarContent />
      </Col>
    </Row>
  );
};

export default HomePage;
