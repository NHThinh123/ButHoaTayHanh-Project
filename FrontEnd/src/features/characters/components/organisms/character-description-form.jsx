import BentoBox from "../../../../components/atoms/bento-box";
import { Flex, Form, Input, Rate, Select } from "antd";
import DefaultTitle from "../../../../components/atoms/default-title";

import TextArea from "antd/es/input/TextArea";
import TagCustom from "../../../../components/atoms/tag-custom";

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
          <Form.Item
            name="rarity"
            label={<DefaultTitle>Phẩm chất: </DefaultTitle>}
            layout="horizontal"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập chọn phẩm chất nhân vật",
              },
            ]}
          >
            <Select
              placeholder="Chọn Phẩm Chất"
              style={{ minWidth: 100, maxWidth: 200 }}
            >
              <Option key="SSR" value="SSR">
                <TagCustom color={"gold"}>SSR</TagCustom>
              </Option>
              <Option key="SR" value="SR">
                <TagCustom color={"purple"}>SR</TagCustom>
              </Option>
              <Option key="R" value="R">
                <TagCustom color={"blue"}>R</TagCustom>
              </Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="role"
            label={<DefaultTitle>Vai trò: </DefaultTitle>}
            layout="horizontal"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn vai trò của nhân vật",
              },
            ]}
          >
            <Select
              placeholder="Chọn Vai Trò"
              style={{ minWidth: 100, maxWidth: 200 }}
            >
              <Option key="Sát thủ" value="Sát thủ">
                <TagCustom color={"grey"}>Sát thủ</TagCustom>
              </Option>
              <Option key="Đấu sĩ" value="Đấu sĩ">
                <TagCustom color={"grey"}>Đấu sĩ</TagCustom>
              </Option>
              <Option key="Hỗ trợ" value="Hỗ trợ">
                <TagCustom color={"grey"}>Hỗ trợ</TagCustom>
              </Option>
              <Option key="Hồi máu" value="Hồi máu">
                <TagCustom color={"grey"}>Hồi máu</TagCustom>
              </Option>
              <Option key="Mưu sĩ" value="Mưu sĩ">
                <TagCustom color={"grey"}>Mưu sĩ</TagCustom>
              </Option>
              <Option key="Đỡ đòn" value="Đỡ đòn">
                <TagCustom color={"grey"}>Đỡ đòn</TagCustom>
              </Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="faction"
            label={<DefaultTitle>Phe: </DefaultTitle>}
            layout="horizontal"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn phe của nhân vật",
              },
            ]}
          >
            <Select
              placeholder="Chọn Vai Trò"
              style={{ minWidth: 100, maxWidth: 200 }}
            >
              <Option key="Tiên giới" value="Tiên giới">
                <TagCustom color={"blue"}>Tiên giới</TagCustom>
              </Option>
              <Option key="Nhân giới" value="Nhân giới">
                <TagCustom color={"green"}>Nhân giới</TagCustom>
              </Option>
              <Option key="Yêu giới" value="Yêu giới">
                <TagCustom color={"red"}>Yêu giới</TagCustom>
              </Option>
              <Option key="Thánh giới" value="Thánh giới">
                <TagCustom color={"gold"}>Thánh giới</TagCustom>
              </Option>
              <Option key="Ma giới" value="Ma giới">
                <TagCustom color={"purple"}>Ma giới</TagCustom>
              </Option>
            </Select>
          </Form.Item>

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
            name="pvpScore"
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
            name="pveScore"
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
