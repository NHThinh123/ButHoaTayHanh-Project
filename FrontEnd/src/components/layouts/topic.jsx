import { Segmented } from "antd";
import { useState } from "react";

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
          backgroundColor: "black",
          color: "white",
          borderRadius: "0px",
        }}
        defaultValue={value}
      />
      <div
        style={{
          width: "100%",
          backgroundColor: "black",
          height: "600px",
          marginBottom: "10px",
        }}
      ></div>
    </div>
  );
};
export default Topic;
