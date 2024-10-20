import { Button, List, Segmented } from "antd";
import { useState } from "react";

import TopicOverview from "../molecules/topic-overview";
import BentoBox from "../../../../components/atoms/bento-box";
import useTopicData from "../../hooks/useTopicData";

const TopicOverviewList = () => {
  const { topicData, loading } = useTopicData();
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
      <List
        loading={loading}
        itemLayout="vertical"
        dataSource={topicData.slice(3)}
        renderItem={(item) => <TopicOverview data={item} />}
      />
      <div style={{ padding: 8 }}>
        <Button color="primary" variant="dashed" block>
          Xem Thêm
        </Button>
      </div>
    </BentoBox>
  );
};
export default TopicOverviewList;
