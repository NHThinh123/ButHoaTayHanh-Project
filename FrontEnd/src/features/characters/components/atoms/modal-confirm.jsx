import { Modal } from "antd";

const ModalConfirm = ({ modalData, confirmDelete, setModalData, remove }) => {
  return (
    <Modal
      title="Bạn muốn xóa kỹ năng này?"
      open={modalData.visible}
      onOk={() => confirmDelete(remove)}
      onCancel={() => setModalData({ visible: false, index: null })}
      okType="danger"
    >
      <p>Xác nhận xóa kỹ năng này?</p>
    </Modal>
  );
};

export default ModalConfirm;
