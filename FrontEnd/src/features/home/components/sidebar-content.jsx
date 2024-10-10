import TopicOverviewList from "../../../components/organisms/topic-overview-list";
import Footer from "../../../components/templates/footer";

const SidebarContent = () => {
  return (
    <div
      style={{
        position: "fixed",
        overflow: "auto",
        scrollbarWidth: "none",
        height: "100vh",
        paddingBottom: 100,
      }}
    >
      <TopicOverviewList />
      <Footer />
    </div>
  );
};
export default SidebarContent;
