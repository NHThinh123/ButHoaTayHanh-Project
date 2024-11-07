import { useState } from "react";
import { Modal, List, Avatar, Skeleton, Button } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

// Helper function để tạo dữ liệu mẫu
const generateItems = (startIndex, count) => {
  return Array.from({ length: count }, (_, index) => ({
    id: startIndex + index,
    title: `Item ${startIndex + index}`,
    description: `This is the description for item ${startIndex + index}`,
    avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${
      startIndex + index
    }`,
  }));
};

const InfiniteScrollModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  // Load dữ liệu ban đầu khi mở modal
  const loadInitialData = () => {
    setLoading(true);
    setTimeout(() => {
      const initialData = generateItems(0, 20);
      setData(initialData);
      setLoading(false);
    }, 1000);
  };

  const fetchMoreData = () => {
    // Giả lập API call
    setTimeout(() => {
      const newData = generateItems(data.length, 20);
      setData([...data, ...newData]);

      // Dừng infinite scroll sau khi đạt 100 items
      if (data.length >= 100) {
        setHasMore(false);
      }
    }, 1500);
  };

  const showModal = () => {
    setIsModalOpen(true);
    loadInitialData();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    // Reset data khi đóng modal
    setData([]);
    setHasMore(true);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Infinite Scroll Modal
      </Button>

      <Modal
        title="Infinite Scroll Example"
        open={isModalOpen}
        onCancel={handleCancel}
        width={800}
        footer={null}
      >
        {loading ? (
          // Hiển thị skeleton loading khi đang tải dữ liệu ban đầu
          <div style={{ padding: "20px 0" }}>
            <Skeleton active avatar paragraph={{ rows: 3 }} />
            <Skeleton active avatar paragraph={{ rows: 3 }} />
            <Skeleton active avatar paragraph={{ rows: 3 }} />
          </div>
        ) : (
          <div
            id="scrollableDiv"
            style={{
              height: 400,
              overflow: "auto",
              padding: "0 16px",
            }}
          >
            <InfiniteScroll
              dataLength={data.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={
                <Skeleton
                  avatar
                  paragraph={{ rows: 1 }}
                  active
                  style={{ padding: "10px 0" }}
                />
              }
              endMessage={
                <div
                  style={{
                    textAlign: "center",
                    padding: "10px 0",
                    color: "#999",
                  }}
                >
                  No more items to load.
                </div>
              }
              scrollableTarget="scrollableDiv"
            >
              <List
                dataSource={data}
                renderItem={(item) => (
                  <List.Item key={item.id}>
                    <List.Item.Meta
                      avatar={<Avatar src={item.avatar} />}
                      title={<a href="#">{item.title}</a>}
                      description={item.description}
                    />
                    <div>Content</div>
                  </List.Item>
                )}
              />
            </InfiniteScroll>
          </div>
        )}
      </Modal>
    </>
  );
};

export default InfiniteScrollModal;
