import { useState } from "react";
import BentoBox from "../../../../components/atoms/bento-box";
import { Form, Upload, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const CharacterImageForm = ({ setFileList }) => {
  const [imageUrl, setImageUrl] = useState(null);

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
      return Upload.LIST_IGNORE;
    }

    const isLt10M = file.size / 1024 / 1024 < 10;
    if (!isLt10M) {
      message.error("Image must be smaller than 10MB!");
      return Upload.LIST_IGNORE;
    }

    const isGt100K = file.size / 1024 > 100;
    if (!isGt100K) {
      message.error("Image must be larger than 100KB!");
      return Upload.LIST_IGNORE;
    }

    return true;
  };

  const handleChange = ({ fileList }) => {
    if (fileList.length > 0 && fileList[0].originFileObj) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrl(e.target.result);
      };
      reader.readAsDataURL(fileList[0].originFileObj);

      setFileList(fileList);
    } else {
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
      <Form.Item
        name="image"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[
          {
            required: true,
            message: "Vui lòng tải ảnh của nhân vật!!!",
          },
        ]}
      >
        <Upload
          name="file"
          showUploadList={false}
          maxCount={1}
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="uploaded"
              style={{ width: "350px", height: "480px", objectFit: "cover" }}
            />
          ) : (
            <div
              style={{
                width: "320px",
                height: "400px",
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
        </Upload>
      </Form.Item>
    </BentoBox>
  );
};

export default CharacterImageForm;
