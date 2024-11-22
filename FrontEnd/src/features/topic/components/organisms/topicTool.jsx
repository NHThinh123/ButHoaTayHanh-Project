import { Button, Col, Input, Radio, Row, Space } from "antd";
import BentoBox from "../../../../components/atoms/bento-box";
import { PlusOutlined } from "@ant-design/icons";
import DefaultTitle from "../../../../components/atoms/default-title";

import Footer from "../../../../components/templates/footer";
import React from "react";
import { debounce } from "lodash";

const { Search } = Input;
const TopicTool = ({ handleFilterChange }) => {
  const debouncedSearch = React.useMemo(
    () => debounce((value) => handleFilterChange(value, "search"), 1000),
    [handleFilterChange]
  );

  const handleSearchChange = (e) => {
    debouncedSearch(e.target.value);
  };
  const category = [
    { value: "", label: "Tất cả" },
    { value: "Thảo luận", label: "Thảo luận" },
    { value: "Chiến lược", label: "Chiến lược" },
    { value: "Sự kiện", label: "Sự kiện" },
    { value: "Bảo trì", label: "Bảo trì" },
    { value: "Thông báo", label: "Thông báo" },
    { value: "Chia sẻ thành tích", label: "Chia sẻ thành tích" },
  ];
  return (
    <div
      style={{
        position: "fixed",
        overflow: "auto",
        scrollbarWidth: "none",
        height: "100vh",
        paddingBottom: 100,
      }}
    >
      <BentoBox padding={28} style={{ marginTop: 12 }}>
        <Row gutter={[0, 18]}>
          <Col span={24}>
            <Row>
              <Col span={14} style={{ display: "flex" }}>
                <DefaultTitle style={{ fontSize: 24 }}>Công cụ</DefaultTitle>
              </Col>
              <Col span={10}>
                <Button
                  color="primary"
                  variant="solid"
                  href="/topic/create"
                  block
                >
                  <PlusOutlined /> Tạo chủ đề mới
                </Button>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Search
              onChange={handleSearchChange}
              placeholder="Tìm kiếm chủ đề thảo luận..."
              allowClear
            />
          </Col>

          <Col span={24}>
            <DefaultTitle> Bộ lọc </DefaultTitle>
          </Col>
          <Col span={24}>
            <DefaultTitle style={{ marginBottom: 12, fontSize: 14 }}>
              Sắp xếp theo
            </DefaultTitle>
            <Radio.Group
              onChange={(e) => handleFilterChange(e.target.value, "filterBy")}
            >
              <Space direction="vertical">
                <Radio key="newest" value="newest">
                  Mới nhất
                </Radio>
                <Radio key="mostFeatured" value="mostFeatured">
                  Nổi bật nhất
                </Radio>
                <Radio key="mostPopular" value="mostPopular">
                  Phổ biến nhất
                </Radio>
              </Space>
            </Radio.Group>
          </Col>

          <Col span={24}>
            <DefaultTitle>Thể loại</DefaultTitle>
          </Col>
          <Col span={24} style={{}}>
            <Radio.Group
              onChange={(e) => handleFilterChange(e.target.value, "category")}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                borderRadius: 0,
              }}
              defaultValue={""}
            >
              {category.map((item) => (
                <Radio.Button
                  key={item.value}
                  value={item.value}
                  style={{ borderRadius: 0 }}
                >
                  {item.label}
                </Radio.Button>
              ))}
            </Radio.Group>
          </Col>
        </Row>
      </BentoBox>
      <Footer />
    </div>
  );
};

export default TopicTool;
