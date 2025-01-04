import { useState, useEffect, useRef } from "react";
import { Layout, Input, Button, List } from "antd";
import { getChat } from "../services/api";

const { Header, Content, Footer } = Layout;
const { TextArea } = Input;

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  // Hàm cuộn đến cuối danh sách
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom(); // Gọi mỗi khi danh sách tin nhắn thay đổi
  }, [messages]);

  const sendMessage = async () => {
    if (inputMessage.trim()) {
      const userMessage = { sender: "User", content: inputMessage };
      setMessages((prev) => [...prev, userMessage]);
      setInputMessage("");

      try {
        const response = await getChat(inputMessage);
        const botMessage = { sender: "Bot", content: response.response };
        setMessages((prev) => [...prev, botMessage]);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ color: "white", textAlign: "center" }}>Chatbot</Header>
      <Content style={{ padding: "20px" }}>
        <List
          bordered
          dataSource={messages}
          renderItem={(item) => (
            <List.Item
              style={{
                justifyContent:
                  item.sender === "User" ? "flex-end" : "flex-start",
                display: "flex",
              }}
            >
              <div
                style={{
                  maxWidth: "60%",
                  background: item.sender === "User" ? "#1890ff" : "#f0f0f0",
                  color: item.sender === "User" ? "white" : "black",
                  padding: "10px 15px",
                  borderRadius: "15px",
                  textAlign: "left",
                  wordWrap: "break-word",
                }}
              >
                <strong>{item.sender}</strong>
                <p style={{ margin: 0 }}>{item.content}</p>
              </div>
            </List.Item>
          )}
          style={{
            height: "70vh",
            overflowY: "auto", // Đảm bảo danh sách có thể cuộn
            padding: "10px",
            backgroundColor: "#fafafa",
            borderRadius: "10px",
          }}
        >
          {/* Đánh dấu cuối danh sách */}
          <div ref={messagesEndRef}></div>
        </List>

        <TextArea
          rows={2}
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Nhập tin nhắn..."
          onPressEnter={sendMessage}
        />
        <Button
          type="primary"
          onClick={sendMessage}
          style={{ marginTop: "10px" }}
        >
          Gửi
        </Button>
      </Content>
      <Footer style={{ textAlign: "center" }}>Chatbot ©2024</Footer>
    </Layout>
  );
};

export default ChatBot;
