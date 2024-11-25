import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/auth.context";
import { Form, message } from "antd";
import { createTopicApi, updateTopicApi } from "../services/topicApi";
import { useNavigate } from "react-router-dom";

const useTopicForm = () => {
  const { auth } = useContext(AuthContext);
  const author = auth?.user;
  const [fileList, setFileList] = useState([]);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true); // Set loading to true before the operation
    try {
      const data = {
        title: values.title,
        description: values.description,
        author: author?.id,
        comment: [],
        likes: [],
        dislikes: [],
        status: "public",
        category: values.category,
        content: [],
      };

      if (fileList[0]) {
        const imageFile = fileList[0].originFileObj;
        data.image = imageFile;
      }

      const res = await createTopicApi(data);

      if (res) {
        message.success("Tạo bài đăng thành công");
        form.resetFields();
        console.log(res);
        setFileList([]);
        navigate("/topic");
      }
    } catch (error) {
      message.error("Tạo bài đăng thất bại");
    } finally {
      setLoading(false); // Reset loading to false regardless of the outcome
    }
  };

  const onChange = async (values, id) => {
    setLoading(true); // Set loading to true before the operation
    try {
      const data = {
        title: values.title,
        description: values.description,
        status: values.status,
        category: values.category,
      };

      if (fileList[0]) {
        const imageFile = fileList[0].originFileObj;
        data.image = imageFile;
      }

      const res = await updateTopicApi(id, data);

      if (res) {
        message.success("Chỉnh sửa bài đăng thành công");
        form.resetFields();
        console.log(res);
        setFileList([]);
        navigate("/topic");
      }
    } catch (error) {
      message.error("Chỉnh sửa bài đăng thất bại");
    } finally {
      setLoading(false); // Reset loading to false regardless of the outcome
    }
  };

  return { author, fileList, setFileList, onFinish, form, loading, onChange };
};

export default useTopicForm;
