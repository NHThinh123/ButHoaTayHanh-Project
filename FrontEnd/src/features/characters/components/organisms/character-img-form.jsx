import { useState, useEffect } from "react";
import { Upload, message } from "antd";
import { PlusOutlined, ReloadOutlined } from "@ant-design/icons";
import BentoBox from "../../../../components/atoms/bento-box";

const { Dragger } = Upload;

const CharacterImageForm = ({ setFileList, initialImage }) => {
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
    <BentoBox
      height={450}
      style={{
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "300px",
      }}
      backgroundColor="#fff"
    >
      <Dragger
        name="file"
        multiple={false}
        maxCount={1}
        beforeUpload={beforeUpload}
        onChange={handleChange}
        showUploadList={false}
        accept="image/*"
        style={{
          width: "350px",
          height: "450px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {imageUrl ? (
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
              src={imageUrl}
              alt="Uploaded"
              style={{
                width: "350px",
                height: "450px",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 10,
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "red",
                color: "white",
                padding: "8px 16px",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <ReloadOutlined />
              Thay đổi ảnh
            </div>
          </div>
        ) : (
          <div
            style={{
              width: "320px",
              height: "350px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              border: "2px dashed #d9d9d9",
              marginTop: 24,
            }}
          >
            <PlusOutlined style={{ fontSize: 50 }} />
            <div style={{ marginTop: 8 }}>Tải ảnh lên</div>
          </div>
        )}
      </Dragger>
    </BentoBox>
  );
};

export default CharacterImageForm;
