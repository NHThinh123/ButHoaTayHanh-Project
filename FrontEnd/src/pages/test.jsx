import { useState, useEffect } from "react";
import { List, Card, Select, Spin } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "../services/axios.customize";

const { Option } = Select;

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    role: "",
    rarity: "",
    sort: "",
  });

  const fetchCharacters = async () => {
    setLoading(true);
    try {
      const data = await axios.get("http://localhost:8080/api/character/", {
        params: {
          ...filters,
          page,
          limit: 4,
        },
      });
      setCharacters((prevCharacters) => [...prevCharacters, ...data.result]);
      setHasMore(data.currentPage < data.totalPages);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCharacters([]);
    setPage(1);
    setHasMore(true);
    fetchCharacters();
  }, [filters]);

  const handleFilterChange = (value, name) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div style={{ marginBottom: 100 }}>
      <div style={{ marginBottom: 16 }}>
        <Select
          style={{ width: 120, marginRight: 8 }}
          placeholder="Select Role"
          onChange={(value) => handleFilterChange(value, "role")}
        >
          <Option value="">All</Option>
          <Option value="Tank">Tank</Option>
          <Option value="DPS">DPS</Option>
          <Option value="Support">Support</Option>
          <Option value="Healer">Healer</Option>
        </Select>
        <Select
          style={{ width: 120, marginRight: 8 }}
          placeholder="Select Rarity"
          onChange={(value) => handleFilterChange(value, "rarity")}
        >
          <Option value="">All</Option>
          <Option value="Common">Common</Option>
          <Option value="Rare">Rare</Option>
          <Option value="Epic">Epic</Option>
          <Option value="Legendary">Legendary</Option>
        </Select>
        <Select
          style={{ width: 120 }}
          placeholder="Sort By"
          onChange={(value) => handleFilterChange(value, "sort")}
        >
          <Option value="">None</Option>
          <Option value="name:asc">Name (A-Z)</Option>
          <Option value="name:desc">Name (Z-A)</Option>
          <Option value="level:asc">Level (Low to High)</Option>
          <Option value="level:desc">Level (High to Low)</Option>
        </Select>
      </div>
      <InfiniteScroll
        dataLength={characters.length}
        next={fetchCharacters}
        hasMore={hasMore}
        loader={<Spin tip="Loading..." />}
        endMessage={
          <p style={{ textAlign: "center" }}>No more characters to load</p>
        }
      >
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={characters}
          renderItem={(character) => (
            <List.Item>
              <Card title={character.name}>
                <p>Rarity: {character.rarity}</p>
                <p>Role: {character.role}</p>
                <p>Level: {character.level}</p>
              </Card>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default CharacterList;
