import { Image } from "antd";
import BentoBox from "../../../../components/atoms/bento-box";
const CharacterImg = ({ img }) => {
  return (
    <BentoBox
      height={450}
      style={{ overflow: "hidden", display: "flex", justifyContent: "center" }}
    >
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
