import { Segmented } from "antd";
import { useState } from "react";
import Guide from "../molecules/guide";
import BentoBox from "../atoms/bento-box";

const Topic = () => {
  const [value, setValue] = useState("Mới Nhất");
  return (
    <div>
      <BentoBox style={{ marginTop: "0px" }}>
        <Segmented
          options={["Mới Nhất", "Phổ biến", "Nổi bật"]}
          onChange={setValue}
          value={value}
          block
          style={{
            borderRadius: "0px",
            margin: 0,
            padding: 0,
          }}
        />
      </BentoBox>

      <div
        style={{
          width: "100%",
        }}
      >
        <Guide height={100} imgSpan={8} />
        <Guide height={100} imgSpan={8} />
        <Guide height={100} imgSpan={8} />
        <Guide height={100} imgSpan={8} />
        <Guide height={100} imgSpan={8} />
        <Guide height={100} imgSpan={8} />
        <Guide height={100} imgSpan={8} />
        <Guide height={100} imgSpan={8} />
      </div>
    </div>
  );
};
export default Topic;
