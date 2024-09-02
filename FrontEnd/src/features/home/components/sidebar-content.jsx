import Topic from "../../../components/organisms/topic";
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
      <Topic />
      <Footer />
    </div>
  );
};
export default SidebarContent;
