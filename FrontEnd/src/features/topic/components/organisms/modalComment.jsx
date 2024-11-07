import { List, Modal, Skeleton } from "antd";

import DefaultText from "../../../../components/atoms/default-text";

import ModalCommentFooter from "../molecules/modal-comment-footer";

import InfiniteScroll from "react-infinite-scroll-component";
import Comment from "../molecules/comment";

const ModalComment = ({
  showModalComment,
  closeModal,
  commentData,
  handleComment,
  form,
  commentCount,
  hasMore,
  loadMore,
  loading,
}) => {
  return (
    <Modal
      open={showModalComment}
      onCancel={closeModal}
      centered
      width={600}
      title={
        <DefaultText
          style={{
            fontSize: 24,
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          {commentCount} Bình luận
        </DefaultText>
      }
      footer={
        <ModalCommentFooter onFinishComment={handleComment} form={form} />
      }
    >
      {loading ? (
        // Hiển thị skeleton loading khi đang tải dữ liệu ban đầu
        <div
          style={{
            padding: "20px 0",
            height: 360,
            overflow: "auto",
          }}
        >
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
            dataLength={commentData.length}
            next={loadMore}
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
                Đã hết bình luận
              </div>
            }
            scrollableTarget="scrollableDiv"
          >
            <List
              dataSource={commentData}
              split={false}
              itemLayout="vertical"
              renderItem={(item) => (
                <List.Item>
                  <Comment data={item} />
                </List.Item>
              )}
            />
          </InfiniteScroll>
        </div>
      )}
    </Modal>
  );
};
export default ModalComment;
