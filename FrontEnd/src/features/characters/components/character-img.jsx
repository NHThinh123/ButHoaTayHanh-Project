import BentoBox from "../../../components/atoms/bento-box";

import { Image } from "antd";
const CharacterImg = ({ img }) => {
  return (
    <BentoBox height={450} style={{ overflow: "hidden" }}>
      <Image
        style={{
          objectFit: "cover",
        }}
        src={img}
      />
    </BentoBox>
  );
};
export default CharacterImg;
