import BentoBox from "../../../../components/atoms/bento-box";

import { useEffect, useState } from "react";
import SpinLoading from "../../../../components/atoms/spin-loading";
import TopicHeader from "../molecules/topic-header";
import TopicBody from "../molecules/topic-body";
import TopicFooter from "../molecules/topic-footer";

const Topic = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1);
    return () => clearTimeout(timer); // Cleanup nếu component bị unmount trước 3s
  }, []);

  if (loading) return <SpinLoading />;
  return (
    <BentoBox padding={28}>
      <TopicHeader />
      <TopicBody />
      <TopicFooter />
    </BentoBox>
  );
};

export default Topic;
