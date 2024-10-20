import { Skeleton } from "antd";
import BentoBox from "../bento-box";

const SkeletonCustom = () => {
  return (
    <BentoBox padding={12}>
      <Skeleton active />
    </BentoBox>
  );
};

export default SkeletonCustom;
