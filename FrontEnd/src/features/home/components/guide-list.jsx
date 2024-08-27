import { List } from "antd";
import Guide from "../../../components/molecules/guide";

const GuideList = () => {
  return (
    <List itemLayout="vertical" size="large">
      <Guide height={200} imgSpan={10}></Guide>
      <Guide height={200} imgSpan={10}></Guide>
      <Guide height={200} imgSpan={10}></Guide>
      <Guide height={200} imgSpan={10}></Guide>
      <Guide height={200} imgSpan={10}></Guide>
    </List>
  );
};
export default GuideList;
