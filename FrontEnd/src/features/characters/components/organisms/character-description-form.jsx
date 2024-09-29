import BentoBox from "../../../../components/atoms/bento-box";
import { Flex, Form, Input, Rate, Select, Space } from "antd";
import DefaultTitle from "../../../../components/atoms/default-title";
import TagCustom from "../../../auth/components/tag-custom";
import TextArea from "antd/es/input/TextArea";

const { Option } = Select;

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
          >
            <Input
              placeholder="Nhập tên nhân vật"
              style={{ fontSize: "22px", fontWeight: "bold" }}
            />
          </Form.Item>
          <Form.Item
            name="rarity"
            label={<DefaultTitle>Phẩm chất: </DefaultTitle>}
            layout="horizontal"
          >
            <Space>
              <Select
                placeholder="--Chọn Phẩm Chất--"
                style={{ minWidth: 100 }}
              >
                <Option value="SSR">
                  <TagCustom color={"gold"}>SSR</TagCustom>
                </Option>
                <Option value="SR">
                  <TagCustom color={"purple"}>SR</TagCustom>
                </Option>
                <Option value="R">
                  <TagCustom color={"blue"}>R</TagCustom>
                </Option>
              </Select>
            </Space>
          </Form.Item>
          <Form.Item
            name="role"
            label={<DefaultTitle>Vai trò: </DefaultTitle>}
            layout="horizontal"
          >
            <Space>
              <Select placeholder="--Chọn Vai Trò--" style={{ minWidth: 100 }}>
                <Option value="Tiên giới">
                  <TagCustom color={"blue"}>Tiên giới</TagCustom>
                </Option>
                <Option value="Nhân giới">
                  <TagCustom color={"green"}>Nhân giới</TagCustom>
                </Option>
                <Option value="Yêu giới">
                  <TagCustom color={"red"}>Yêu giới</TagCustom>
                </Option>
                <Option value="Thánh giới">
                  <TagCustom color={"gold"}>Thánh giới</TagCustom>
                </Option>
                <Option value="Ma giới">
                  <TagCustom color={"purple"}>Ma giới</TagCustom>
                </Option>
              </Select>
            </Space>
          </Form.Item>
          <Form.Item
            name="story"
            label={
              <DefaultTitle style={{ marginBottom: 8 }}>
                Cốt truyện:
              </DefaultTitle>
            }
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
            name="pvpScore"
            label={<DefaultTitle>PVP: </DefaultTitle>}
            layout="horizontal"
          >
            <Rate allowHalf />
          </Form.Item>
          <Form.Item
            name="pveScore"
            label={<DefaultTitle>PVE: </DefaultTitle>}
            layout="horizontal"
          >
            <Rate allowHalf />
          </Form.Item>
        </Flex>
      </div>
    </BentoBox>
  );
};

export default CharacterDescriptionForm;
