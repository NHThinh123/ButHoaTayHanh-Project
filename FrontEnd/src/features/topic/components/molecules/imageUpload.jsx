import { useEffect, useState } from "react";
import { Upload, message } from "antd";
import { PlusOutlined, ReloadOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

const ImageUpload = ({ setFileList, initialImage }) => {
  const [imageUrl, setImageUrl] = useState(null);
  // Thêm useEffect để xử lý initialImage
  useEffect(() => {
    if (initialImage) {
      setImageUrl(initialImage);
    }
  }, [initialImage]);
  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("Chỉ được tải lên tập tin hình ảnh!");
      return Upload.LIST_IGNORE;
    }

    const isLt10M = file.size / 1024 / 1024 < 10;
    if (!isLt10M) {
      message.error("Hình ảnh phải nhỏ hơn 10MB!");
      return Upload.LIST_IGNORE;
    }

    const isGt100K = file.size / 1024 > 100;
    if (!isGt100K) {
      message.error("Hình ảnh phải lớn hơn 100KB!");
      return Upload.LIST_IGNORE;
    }

    return true;
  };

  const handleChange = (info) => {
    const { status } = info.file;
    const fileList = [...info.fileList];

    if (status === "done" || status === "uploading") {
      if (fileList.length > 0 && fileList[0].originFileObj) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImageUrl(e.target.result);
        };
        reader.readAsDataURL(fileList[0].originFileObj);

        setFileList(fileList);
      }
    } else if (status === "removed") {
      setImageUrl(null);
      setFileList([]);
    }
  };

  return (
    <Dragger
      name="file"
      multiple={false}
      maxCount={1}
      beforeUpload={beforeUpload}
      onChange={handleChange}
      showUploadList={false}
      accept="image/*"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        border: "2px dashed #d9d9d9",
        borderRadius: "8px",
      }}
    >
      {imageUrl ? (
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingTop: "56.25%", // Tỷ lệ 16:9
            overflow: "hidden",
            borderRadius: "8px",
          }}
        >
          <img
            src={imageUrl}
            alt="Uploaded"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 10,
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              color: "white",
              padding: "8px 16px",
              borderRadius: "4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            onClick={() => setImageUrl(null)} // Xóa ảnh để thay đổi
          >
            <ReloadOutlined />
            Thay đổi ảnh
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <PlusOutlined style={{ fontSize: 50, color: "#8c8c8c" }} />
          <div style={{ marginTop: 8, color: "#595959" }}>Tải ảnh lên</div>
        </div>
      )}
    </Dragger>
  );
};

export default ImageUpload;
