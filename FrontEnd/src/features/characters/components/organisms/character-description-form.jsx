import BentoBox from "../../../../components/atoms/bento-box";
import { Flex, Form, Input, Rate } from "antd";
import DefaultTitle from "../../../../components/atoms/default-title";

import TextArea from "antd/es/input/TextArea";

import SelectRarityForm from "../atoms/select-rarity-form";
import SelectRoleForm from "../atoms/select-role-form";
import SelectFactionForm from "../atoms/select-faction-form";

const CharacterDescriptionForm = () => {
  return (
    <BentoBox padding={16} height={450} backgroundColor="#fff">
      <div
        style={{
          height: "100%",
          overflow: "auto",
          scrollbarWidth: "thin",
          padding: 12,
        }}
      >
        <Flex vertical>
          <Form.Item
            name="name"
            label={
              <DefaultTitle style={{ marginBottom: 8 }}>
                Tên nhân vật:
              </DefaultTitle>
            }
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên nhân vật",
              },
            ]}
          >
            <Input
              placeholder="Nhập tên nhân vật"
              style={{ fontSize: "22px", fontWeight: "bold" }}
            />
          </Form.Item>
          <SelectRarityForm />

          <SelectRoleForm />

          <SelectFactionForm />

          <Form.Item
            name="story"
            label={
              <DefaultTitle style={{ marginBottom: 8 }}>
                Cốt truyện:
              </DefaultTitle>
            }
            rules={[
              {
                required: true,
                message: "Vui lòng nhập cốt truyện của nhân vật",
              },
            ]}
          >
            <TextArea
              autoSize={{
                minRows: 6,
                maxRows: 24,
              }}
              style={{ fontSize: "16px" }}
              placeholder="Mô tả cốt truyện của nhân vật"
            />
          </Form.Item>

          <DefaultTitle style={{ marginBottom: 8 }}>
            Đánh giá sức mạnh:
          </DefaultTitle>
          <Form.Item
            name="PvpScore"
            label={<DefaultTitle>PVP: </DefaultTitle>}
            layout="horizontal"
            rules={[
              {
                required: true,
                message: "Vui lòng đánh giá khả năng PVP của nhân vật",
              },
            ]}
          >
            <Rate allowHalf />
          </Form.Item>
          <Form.Item
            name="PveScore"
            label={<DefaultTitle>PVE: </DefaultTitle>}
            layout="horizontal"
            rules={[
              {
                required: true,
                message: "Vui lòng đánh giá khả năng PVE của nhân vật",
              },
            ]}
          >
            <Rate allowHalf />
          </Form.Item>
        </Flex>
      </div>
    </BentoBox>
  );
};

export default CharacterDescriptionForm;
