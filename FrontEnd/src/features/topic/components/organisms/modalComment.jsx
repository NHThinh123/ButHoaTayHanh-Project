import { Modal } from "antd";

import DefaultText from "../../../../components/atoms/default-text";

import useCommentData from "../../hooks/useCommentData";
import ModalCommentFooter from "../molecules/modal-comment-footer";
import CommentList from "../molecules/comment-list";

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

const ModalComment = ({ showModalComment, closeModal, topicId }) => {
  const { onFinishComment } = useCommentData();
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "600",
          }}
        >
          69 Bình luận
        </DefaultText>
      }
      footer={
        <ModalCommentFooter
          onFinishComment={onFinishComment}
          topicId={topicId}
        />
      }
    >
      <CommentList data={data} />
    </Modal>
  );
};
export default ModalComment;
