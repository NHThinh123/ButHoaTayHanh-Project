import { List } from "antd";
import BentoBox from "../../../components/atoms/bento-box";
import DefaultText from "../../../components/atoms/default-text";
import DefaultTitle from "../../../components/atoms/default-title";

const CharacterSkill = ({ skillData }) => {
  return (
    <BentoBox padding={16} minHeight={200}>
      <DefaultTitle style={{ fontWeight: 700, fontSize: 18, margin: 12 }}>
        {`${skillData.title} (Hồi chiêu: ${skillData.cooldown} lượt):`}
      </DefaultTitle>
      <div style={{ margin: 12 }}>
        <DefaultText>{skillData.mainSkill}</DefaultText>
      </div>
      <div style={{ margin: "12px 24px" }}>
        <List
          grid={{
            gutter: 16,
            column: 1,
          }}
          dataSource={skillData.subSkill}
          renderItem={(item) => (
            <List.Item>
              <DefaultText>{`o ${item}`}</DefaultText>
            </List.Item>
          )}
        />
      </div>
    </BentoBox>
  );
};
export default CharacterSkill;
