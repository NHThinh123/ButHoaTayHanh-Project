import { Flex, Image } from "antd";

import iconSSR from "../assets/images/icon/ssr-icon.png";
import iconSR from "../assets/images/icon/sr-icon.png";
import iconR from "../assets/images/icon/r-icon.png";
import CharacterList from "../components/organisms/characterList";
const Character = () => {
  return (
    <div>
      <h1 style={{ margin: "24px 0px", fontSize: 36 }}>Danh sách tướng</h1>
      <Flex align="center" style={{ margin: "15px 0px" }}>
        <Image src={iconSSR} preview={false} width={"50px"}></Image>
        <div style={{ fontSize: 28, fontWeight: "700", margin: " 0px 10px" }}>
          Thần tướng SSR
        </div>
      </Flex>
      <br />
      <CharacterList />
      <br />
      <Flex align="center" style={{ margin: "15px 0px" }}>
        <Image src={iconSR} preview={false} width={"60px"}></Image>
        <div style={{ fontSize: 28, fontWeight: "700", margin: " 0px 10px" }}>
          Thần tướng SR
        </div>
      </Flex>
      <br />
      <CharacterList />
      <br />
      <Flex align="center" style={{ margin: "15px 0px" }}>
        <Image src={iconR} preview={false} width={"50px"}></Image>
        <div style={{ fontSize: 28, fontWeight: "700", margin: " 0px 10px" }}>
          Thần tướng R
        </div>
      </Flex>
      <br />
      <CharacterList />
    </div>
  );
};
export default Character;
