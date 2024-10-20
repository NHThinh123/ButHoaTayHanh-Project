import Footer from "../../../components/templates/footer";
import TopicOverviewList from "../../topic/components/templates/topic-overview-list";

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
