import { Card, Typography, Tag, Space } from "antd";

const { Text, Title } = Typography;

const TestPage = () => {
  return (
    <Card
      style={{
        width: 300,
        height: 400,
        backgroundImage: `url()`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
      }}
      bodyStyle={{
        padding: 0,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
          padding: "16px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Tag color="gold" style={{ fontSize: "16px", fontWeight: "bold" }}>
          SSR
        </Tag>
      </div>
      <div
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Title
          level={3}
          style={{
            color: "white",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            marginBottom: "16px",
          }}
        >
          {name}
        </Title>
        <Space>
          <Text style={{ color: "white" }}>Tiên giới</Text>
          <Text style={{ color: "white" }}>•</Text>
          <Text style={{ color: "white" }}>Hỗ trợ</Text>
        </Space>
      </div>
    </Card>
  );
};
export default TestPage;
