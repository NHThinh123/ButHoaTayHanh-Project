import BentoBox from "../../../../components/atoms/bento-box";
import { Form, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

// const beforeUpload = (file) => {
//   const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
//   const isLt5M = file.size / 1024 / 1024 < 5; // Kích thước < 5MB
//   const isGt100K = file.size > 100 * 1024; // Kích thước > 100KB

//   if (!isJpgOrPng) {
//     message.error("Vui lòng chỉ tải ảnh có định dạng là .JPEG hoặc .PNG!");
//   }

//   if (!isLt5M) {
//     message.error("Hình ảnh phải có kích thước nhỏ hơn 5MB!");
//   }

//   if (!isGt100K) {
//     message.error("Hình ảnh phải có kích thước lớn hơn 100KB!");
//   }

//   return isJpgOrPng && isLt5M && isGt100K;
// };

const CharacterImageForm = ({ setFileList }) => {
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
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
      <Form.Item
        name="image"
        label="Character Image"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[
          {
            required: true,
            message: "Please upload an image!",
          },
        ]}
      >
        <Upload
          name="file"
          listType="picture-card"
          maxCount={1}
          beforeUpload={() => false}
          onChange={({ fileList }) => setFileList(fileList)}
        >
          {/* {fileList.length > 0 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={fileList[0].thumbUrl || fileList[0].url}
                  style={{
                    maxWidth: "100%",
                    maxHeight: 350,
                    objectFit: "cover",
                  }}
                />
                
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
            )} */}
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        </Upload>
      </Form.Item>
    </BentoBox>
  );
};

export default CharacterImageForm;
