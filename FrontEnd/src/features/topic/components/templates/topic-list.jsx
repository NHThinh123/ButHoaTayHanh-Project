import { Divider, List, Skeleton } from "antd";
import Topic from "../organisms/topic";

import InfiniteScroll from "react-infinite-scroll-component";
const TopicList = ({ data, loadMoreData, hasMore, deleteTopic }) => {
  return (
    <InfiniteScroll
      dataLength={data.length} // Số lượng item hiện tại
      next={loadMoreData} // Hàm gọi khi cuộn đến cuối
      hasMore={hasMore} // Xác định nếu còn dữ liệu
      loader={
        <Skeleton
          avatar
          paragraph={{
            rows: 1,
          }}
          active
        />
      }
      endMessage={<Divider plain>Đã hết bài viết 🐨</Divider>}
      scrollableTarget="scrollableDiv"
    >
      <List
        itemLayout="vertical"
        split={false}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Topic topicData={item} deleteTopic={deleteTopic}></Topic>
          </List.Item>
        )}
      ></List>
    </InfiniteScroll>
  );
};

export default TopicList;
