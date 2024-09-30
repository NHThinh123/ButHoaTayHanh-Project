import BentoBox from "../../../../components/atoms/bento-box";
import { Empty, message, Upload } from "antd";
import { useState } from "react";
import DefaultText from "../../../../components/atoms/default-text";
import ImgCrop from "antd-img-crop";
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("Vui lòng chỉ tải ảnh có định dạng là .JPEG hoặc .PNG!");
  }
  const isLt5M = file.size / 1024 / 1024 < 5;
  const isSt100K = file.size > 100 * 1024;
  if (!isLt5M && !isSt100K) {
    message.error("Hình ảnh phải có kích thước từ 100kb đến 5mb!");
  }
  return isJpgOrPng && isLt5M;
};

const CharacterImageForm = () => {
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === "removed") {
      setImageUrl(null);
    } else {
      getBase64(info.file.originFileObj, (url) => {
        setImageUrl(url);
      });
    }
  };

  return (
    <BentoBox
      height={450}
      style={{
        overflow: "hidden",
        display: "flex",
        padding: "28px",
        justifyContent: "center",
        alignItems: "center",
      }}
      backgroundColor="#fff"
    >
      <ImgCrop aspect={3 / 4}>
        <Upload
          name="file"
          maxCount={1}
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={imageUrl}
                style={{
                  maxWidth: "100%",
                  maxHeight: 350,
                  objectFit: "cover",
                }}
              />
              {/* <Button
                type="primary"
                icon={<UploadOutlined />}
                style={{ marginTop: 16 }}
                block
              >
                Upload
              </Button> */}
            </div>
          ) : (
            <Empty
              style={{
                minHeight: 300,
                border: "dashed 1px",

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              description={
                <DefaultText style={{ margin: 12 }}>
                  Nhấn vào đây hoặc kéo thả ảnh vào khu vực này để tải lên
                </DefaultText>
              }
            ></Empty>
          )}
        </Upload>
      </ImgCrop>
    </BentoBox>
  );
};

export default CharacterImageForm;
