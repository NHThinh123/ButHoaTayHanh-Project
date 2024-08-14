import { Segmented } from "antd";
import { useState } from "react";
import Guide from "../ui/guide";

const Topic = () => {
  const [value, setValue] = useState("Mới nhất");
  return (
    <div>
      <Segmented
        options={["Mới Nhất", "Phổ biến", "Nổi bật"]}
        value={value}
        onChange={setValue}
        block
        style={{
          borderRadius: "0px",
        }}
        defaultValue={value}
      />
      <div
        style={{
          width: "100%",
          backgroundColor: "grey",
          height: "390px",
          marginBottom: "10px",
          padding: "5px",
        }}
      >
        <Guide height={100} imgSpan={8} />
      </div>
    </div>
  );
};
export default Topic;
