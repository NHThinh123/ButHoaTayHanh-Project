import { List, Segmented } from "antd";
import { useState } from "react";

import BentoBox from "../atoms/bento-box";
import TopicOverview from "../../features/topic/components/topic-overview";

const TopicOverviewList = () => {
  const [value, setValue] = useState("Mới Nhất");
  return (
    <BentoBox style={{ marginTop: "0px" }}>
      <Segmented
        options={["Mới Nhất", "Phổ biến", "Nổi bật"]}
        onChange={setValue}
        value={value}
        block
        size="large"
        style={{
          padding: 0,
          marginBottom: 12,
        }}
      />
      <List>
        <TopicOverview />
        <TopicOverview />
        <TopicOverview />
      </List>
    </BentoBox>
  );
};
export default TopicOverviewList;
