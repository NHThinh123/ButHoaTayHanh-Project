import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Upload } from "antd";

const App = () => {
  return (
    <Form onFinish={(values) => console.log(values)}>
      <Form.Item label="Upload file" name="image">
        <Upload
          onChange={(info) => {
            console.log(info.file);
          }}
          beforeUpload={(file) => {
            console.log("file is: ", file);
            return false;
          }}
        >
          <Button icon={<UploadOutlined />}>Chọn file</Button>
        </Upload>
      </Form.Item>
    </Form>
  );
};
export default App;
