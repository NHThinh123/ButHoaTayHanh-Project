import { List } from "antd";
import Comment from "./comment";

const CommentList = ({ data }) => {
  return (
    <List
      dataSource={data}
      split={false}
      style={{
        overflow: "auto",
        height: "60vh",
        scrollbarWidth: "thin",
      }}
      itemLayout="vertical"
      renderItem={(item) => (
        <List.Item>
          <Comment data={item} />
        </List.Item>
      )}
    />
  );
};

export default CommentList;
