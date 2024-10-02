import { Button, Col, Form, Layout, message, Row } from "antd";

import CharacterDescriptionForm from "../organisms/character-description-form";
import CharacterSkillForm from "../organisms/character-skill-form";
import CharacterImageForm from "../organisms/character-img-form";
import BentoBox from "../../../../components/atoms/bento-box";
import { useState } from "react";
import axios from "../../../../services/axios.customize";
const CharacterForm = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const onFinish = async (values) => {
    try {
      console.log(values);

      const data = {
        name: values.name,
        rarity: values.rarity,
        role: values.role,
        faction: values.faction,
        story: values.story,
        pveScore: values.pveScore,
        pvpScore: values.pvpScore,
        skills: values.skills,
      };
      if (fileList[0]) {
        const imageFile = fileList[0].originFileObj;
        data.image = imageFile; // Hoặc xử lý theo cách khác nếu cần
      }
      const res = await axios.post("/api/character", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (res) {
        message.success("Character created successfully");
        form.resetFields();

        setFileList([]);
      }
    } catch (error) {
      message.error("Failed to create character");
    }
  };
  return (
    <Layout style={{ padding: 8, minHeight: "100vh" }}>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Row>
          <Col span={8}>
            <CharacterImageForm setFileList={setFileList} />
          </Col>
          <Col span={16}>
            <CharacterDescriptionForm />
          </Col>
        </Row>

        <Row>
          <Col span={24} style={{ marginBottom: 40 }}>
            <CharacterSkillForm />
          </Col>
        </Row>
        <Row>
          <Col
            span={24}
            style={{
              position: "fixed",
              bottom: 0,
              width: "75%",

              paddingRight: 16,
            }}
          >
            <BentoBox>
              <Form.Item noStyle>
                <Button type="primary" htmlType="submit" block>
                  Cập nhật
                </Button>
              </Form.Item>
            </BentoBox>
          </Col>
        </Row>
      </Form>
    </Layout>
  );
};

export default CharacterForm;
