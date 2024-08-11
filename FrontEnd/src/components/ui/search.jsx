import { Input, Space } from "antd";
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);
const SearchBar = () => (
  <Space
    direction="vertical"
    style={{
      display: "flex",
      height: "100%",
      justifyContent: "center",
    }}
  >
    <Search
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    />
  </Space>
);
export default SearchBar;
