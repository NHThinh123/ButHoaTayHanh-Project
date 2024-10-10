import { List } from "antd";

import { Link } from "react-router-dom";
import CharacterCard from "../organisms/characterCard";
const CharacterList = ({ characterData }) => {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 2,
        lg: 3,
        xl: 4,
        xxl: 4,
      }}
      dataSource={characterData}
      renderItem={(item) => (
        <List.Item>
          <Link to={`/character/${item._id}`}>
            <CharacterCard character={item} />
          </Link>
        </List.Item>
      )}
    />
  );
};
export default CharacterList;
