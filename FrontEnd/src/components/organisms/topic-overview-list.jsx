import { Button, List, Segmented } from "antd";
import { useState } from "react";

import BentoBox from "../atoms/bento-box";
import TopicOverview from "../../features/topic/components/molecules/topic-overview";

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
          margin: "8px",
        }}
      />
      <List>
        <TopicOverview />
        <TopicOverview />
        <TopicOverview />
      </List>
      <div style={{ padding: 8 }}>
        <Button color="primary" variant="dashed" block>
          Xem Thêm
        </Button>
      </div>
    </BentoBox>
  );
};
export default TopicOverviewList;
