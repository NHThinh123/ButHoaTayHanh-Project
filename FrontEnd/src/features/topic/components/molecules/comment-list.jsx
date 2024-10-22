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
      renderItem={() => (
        <List.Item>
          <Comment data={data} />
        </List.Item>
      )}
    />
  );
};

export default CommentList;
