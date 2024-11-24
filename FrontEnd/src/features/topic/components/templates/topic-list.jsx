import { Divider, List, Skeleton, Empty } from "antd";
import Topic from "../organisms/topic";

import InfiniteScroll from "react-infinite-scroll-component";
import BentoBox from "../../../../components/atoms/bento-box";

const TopicList = ({ data, loadMoreData, hasMore, deleteTopic }) => {
  return data.length === 0 ? (
    // Giao diện khi danh sách trống
    <BentoBox
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: "12px 0px",
      }}
    >
      <Empty description={<span>Không có bài viết nào 🐨</span>} />
    </BentoBox>
  ) : (
    // Giao diện khi có dữ liệu
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
