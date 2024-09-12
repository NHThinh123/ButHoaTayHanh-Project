import BentoBox from "../../../components/atoms/bento-box";
import CharacterImage from "../../../assets/images/character/natra.jpg";
import { Image } from "antd";
const CharacterImg = () => {
  return (
    <BentoBox height={450} style={{ overflow: "hidden" }}>
      <Image
        style={{
          objectFit: "cover",
        }}
        src={CharacterImage}
        preview={false}
      />
    </BentoBox>
  );
};
export default CharacterImg;
