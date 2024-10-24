import { Modal } from "antd";

import DefaultText from "../../../../components/atoms/default-text";

import useCommentData from "../../hooks/useCommentData";
import ModalCommentFooter from "../molecules/modal-comment-footer";
import CommentList from "../molecules/comment-list";

const ModalComment = ({
  showModalComment,
  closeModal,
  topicId,
  commentData,
}) => {
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
            textAlign: "center",
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
      <CommentList data={commentData} />
    </Modal>
  );
};
export default ModalComment;
