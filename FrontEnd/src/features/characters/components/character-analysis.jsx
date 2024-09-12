import { Flex, Rate } from "antd";
import DefaultTitle from "../../../components/atoms/default-title";

const CharacterAnalysis = ({ PvpScore, PveScore }) => {
  return (
    <Flex gap="middle" vertical>
      <Flex gap="middle">
        <DefaultTitle>PVP: </DefaultTitle>
        <Rate allowHalf defaultValue={PvpScore} disabled />
      </Flex>
      <Flex gap="middle">
        <DefaultTitle>PVE: </DefaultTitle>
        <Rate allowHalf defaultValue={PveScore} disabled />
      </Flex>
    </Flex>
  );
};
export default CharacterAnalysis;
