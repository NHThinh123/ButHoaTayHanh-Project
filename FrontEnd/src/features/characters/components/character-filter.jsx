import { Select, Input, Row, Col } from "antd";
import { debounce } from "lodash";
import React from "react";

const { Option } = Select;
const { Search } = Input;

const CharacterFilter = ({ handleFilterChange }) => {
  const debouncedSearch = React.useMemo(
    () => debounce((value) => handleFilterChange(value, "search"), 300),
    [handleFilterChange]
  );

  const handleSearchChange = (e) => {
    debouncedSearch(e.target.value);
  };
  return (
    <Row
      gutter={[8, 8]}
      style={{
        marginBottom: 16,
        justifyContent: "space-between",
        padding: "0px 8px",
      }}
    >
      <Col xs={24} sm={24} md={12} lg={8}>
        <Search
          placeholder="Tìm kiếm tướng"
          onChange={handleSearchChange}
          style={{ width: "100%" }}
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={12}>
        <Row gutter={8}>
          <Col span={8}>
            <Select
              style={{ width: "100%" }}
              placeholder="Vai trò"
              defaultValue={""}
              onChange={(value) => handleFilterChange(value, "role")}
            >
              <Option value="">Tất cả</Option>
              <Option value="Đỡ đòn">Đỡ đòn</Option>
              <Option value="Sát thủ">Sát thủ</Option>
              <Option value="Đấu sĩ">Đấu sĩ</Option>
              <Option value="Mưu sĩ">Mưu sĩ</Option>
              <Option value="Hồi máu">Hồi máu</Option>
              <Option value="Hỗ trợ">Hỗ trợ</Option>
            </Select>
          </Col>
          <Col span={8}>
            <Select
              style={{ width: "100%" }}
              placeholder="Phe phái"
              defaultValue={""}
              onChange={(value) => handleFilterChange(value, "faction")}
            >
              <Option value="">Tất cả</Option>
              <Option value="Tiên giới">Tiên giới</Option>
              <Option value="Nhân giới">Nhân giới</Option>
              <Option value="Yêu giới">Yêu giới</Option>
              <Option value="Thánh giới">Thánh giới</Option>
              <Option value="Ma giới">Ma giới</Option>
            </Select>
          </Col>
          <Col span={8}>
            <Select
              style={{ width: "100%" }}
              placeholder="Độ hiếm"
              defaultValue={""}
              onChange={(value) => handleFilterChange(value, "rarity")}
            >
              <Option value="">Tất cả</Option>
              <Option value="SSR">SSR</Option>
              <Option value="SR">SR</Option>
              <Option value="R">R</Option>
            </Select>
          </Col>
          <Col span={8}>
            <Select
              style={{ width: "100%" }}
              placeholder="Sắp xếp theo"
              defaultValue={""}
              onChange={(value) => handleFilterChange(value, "sort")}
            >
              <Option value="">Mặc định</Option>
              <Option value="name:asc">Tên (A-Z)</Option>
              <Option value="name:desc">Tên (Z-A)</Option>
            </Select>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CharacterFilter;
