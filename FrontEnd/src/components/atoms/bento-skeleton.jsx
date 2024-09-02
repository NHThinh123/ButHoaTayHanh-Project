import { Skeleton } from "antd";

export const BentoSkeleton = ({ rows }) => {
  return (
    <Skeleton
      active
      style={{ height: "420px", padding: "16px" }}
      paragraph={{ rows: rows }}
    />
  );
};
BentoSkeleton.defaultProps = {
  rows: 3,
};

export default BentoSkeleton;
