import { Modal, Image } from "antd";

import DefaultTitle from "./default-title";
import DefaultText from "./default-text";

const LoginRequiredModal = ({ isVisible, handleOk, handleCancel }) => {
  return (
    <Modal
      title={<DefaultTitle>Yêu cầu đăng nhập</DefaultTitle>} // Thêm icon vào title
      open={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Đăng nhập"
      cancelText="Hủy"
      style={{ top: "20vh", textAlign: "center" }} // Điều chỉnh vị trí của modal từ trên xuống
      className="modal-body" // Tăng padding để modal đẹp hơn
      width={400} // Cải thiện chiều rộng của modal
    >
      <Image
        width={100} // Thiết lập kích thước ảnh nhỏ hơn cho phù hợp với modal
        src="https://res.cloudinary.com/dayljfyja/image/upload/v1732434710/image_g4vdch.webp" // Chèn một ảnh minh họa
        alt="Login Image"
        preview={false} // Tắt preview khi nhấn vào ảnh
        style={{ marginBottom: 16 }}
      />
      <DefaultText>
        Bạn chưa đăng nhập.
        <br /> Vui lòng đăng nhập để tiếp tục.
      </DefaultText>
    </Modal>
  );
};

export default LoginRequiredModal;
