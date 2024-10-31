import { Modal } from "antd";

import DefaultText from "../../../../components/atoms/default-text";

import ModalCommentFooter from "../molecules/modal-comment-footer";
import CommentList from "../molecules/comment-list";

const ModalComment = ({
  showModalComment,
  closeModal,
  commentData,
  handleComment,
  form,
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
          69 Bình luận
        </DefaultText>
      }
      footer={
        <ModalCommentFooter onFinishComment={handleComment} form={form} />
      }
    >
      <CommentList data={commentData} />
    </Modal>
  );
};
export default ModalComment;
