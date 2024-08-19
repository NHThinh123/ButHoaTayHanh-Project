import { Segmented } from "antd";
import { useState } from "react";
import Guide from "../ui/guide";

const Topic = () => {
  const [value, setValue] = useState("Mới Nhất");
  return (
    <div>
      <Segmented
        options={["Mới Nhất", "Phổ biến", "Nổi bật"]}
        onChange={setValue}
        value={value}
        block
        style={{
          borderRadius: "0px",
        }}
      />

      <div
        style={{
          width: "100%",
          backgroundColor: "grey",

          marginBottom: "10px",
          padding: "5px",
        }}
      >
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
