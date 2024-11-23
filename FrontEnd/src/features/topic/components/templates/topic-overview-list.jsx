import { Button, List } from "antd";

import TopicOverview from "../molecules/topic-overview";
import BentoBox from "../../../../components/atoms/bento-box";
import useTopicData from "../../hooks/useTopicData";
import DefaultTitle from "../../../../components/atoms/default-title";

const TopicOverviewList = ({ data }) => {
  const { loading } = useTopicData();

  return (
    <BentoBox style={{ marginTop: "0px" }}>
      <DefaultTitle style={{ fontSize: 24, margin: 16 }}>
        Bài viết nổi bật
      </DefaultTitle>
      <List
        loading={loading}
        itemLayout="vertical"
        dataSource={data}
        renderItem={(item) => <TopicOverview data={item} />}
      />
      <div style={{ padding: 8 }}>
        <Button color="primary" variant="dashed" href="/topic" block>
          Xem Thêm
        </Button>
      </div>
    </BentoBox>
  );
};
export default TopicOverviewList;
