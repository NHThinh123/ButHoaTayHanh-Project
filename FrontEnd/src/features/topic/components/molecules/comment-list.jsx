import { List } from "antd";
import Comment from "./comment";
import useCommentData from "../../hooks/useCommentData";

const CommentList = ({ data }) => {
  const { loading } = useCommentData();
  if (loading) return <p>Loading</p>;
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
          <Comment data={item} loading={loading} />
        </List.Item>
      )}
    />
  );
};

export default CommentList;
