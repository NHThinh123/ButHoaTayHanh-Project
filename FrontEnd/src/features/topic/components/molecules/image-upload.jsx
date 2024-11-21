/* eslint-disable no-unused-vars */
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, message, Row } from "antd";
import Dragger from "antd/es/upload/Dragger";
import { useState } from "react";

const ImageUpload = ({ value, onChange }) => {
  const [imageUrl, setImageUrl] = useState(value);
  const [loading, setLoading] = useState(false);

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("Bạn chỉ có thể tải lên tập tin hình ảnh!");
      return false;
    }
    return true;
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
        onChange?.(url);
      });
    }
  };

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const handleRemove = () => {
    setImageUrl(null);
    onChange?.(null);
  };

  return (
    <div>
      {!imageUrl ? (
        <Dragger
          name="file"
          multiple={false}
          showUploadList={false}
          beforeUpload={beforeUpload}
          onChange={handleChange}
          customRequest={({ file, onSuccess }) => {
            setTimeout(() => {
              onSuccess("ok");
            }, 0);
          }}
          style={{
            background: "#fafafa",
            border: "2px dashed #d9d9d9",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "32px 16px" }}>
            <p
              className="ant-upload-drag-icon"
              style={{ marginBottom: "16px" }}
            >
              <InboxOutlined style={{ fontSize: "48px", color: "#40a9ff" }} />
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "#000000d9",
                marginBottom: "8px",
              }}
            >
              Kéo thả hoặc click để tải ảnh lên
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#00000073",
                padding: "0 16px",
              }}
            >
              Hỗ trợ tải lên một hình ảnh duy nhất. Ảnh sẽ được hiển thị với tỉ
              lệ 16:9
            </p>
          </div>
        </Dragger>
      ) : (
        <div>
          {/* Image Container */}
          <div
            style={{
              width: "100%",
              paddingTop: "56.25%", // Tỉ lệ 16:9
              position: "relative",
              overflow: "hidden",
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
              border: "1px solid #d9d9d9",
              marginBottom: "12px", // Thêm khoảng cách với nút phía dưới
            }}
          >
            <img
              src={imageUrl}
              alt="Preview"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Bottom Action Button */}
          <Row justify="end">
            <Button
              icon={<UploadOutlined />}
              onClick={() =>
                document.querySelector('input[type="file"]').click()
              }
            >
              Thay đổi ảnh
            </Button>
          </Row>

          {/* Hidden file input for change image */}
          <input
            type="file"
            style={{ display: "none" }}
            onChange={(e) => {
              const file = e.target.files[0];
              if (beforeUpload(file)) {
                handleChange({ file: { originFileObj: file, status: "done" } });
              }
              e.target.value = null; // Reset input
            }}
            accept="image/*"
          />
        </div>
      )}
    </div>
  );
};
export default ImageUpload;
