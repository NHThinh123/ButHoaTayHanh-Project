import { List, Tag } from "antd";

import DefaultText from "../../../../components/atoms/default-text";
import DefaultTitle from "../../../../components/atoms/default-title";

import BentoBox from "../../../../components/atoms/bento-box";
import SkillDescription from "../molecules/skill-description";

const CharacterSkill = ({ skillData }) => {
  return (
    <BentoBox padding={16} minHeight={200}>
      <DefaultTitle style={{ fontWeight: 700, fontSize: 18, margin: 12 }}>
        {`${skillData.title} (Hồi chiêu: ${skillData.cooldown} lượt):`}
      </DefaultTitle>

      <div style={{ margin: 12 }}>
        <SkillDescription
          skillData={skillData.mainSkill}
          effectData={skillData.effectSkill}
        ></SkillDescription>
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
              <SkillDescription
                skillData={`o ${item}`}
                effectData={skillData.effectSkill}
              />
            </List.Item>
          )}
        />
      </div>

      <div style={{ margin: "12px" }}>
        <List
          grid={{
            gutter: 16,
            column: 1,
          }}
          dataSource={skillData.effectSkill}
          renderItem={(item) => (
            <List.Item style={{ display: "inline-flex" }}>
              <Tag
                color={item.colorEffect}
                style={{ padding: 5, fontWeight: "700" }}
              >
                {`${item.nameEffect} :`}
              </Tag>
              <DefaultText>{item.descriptionEffect}</DefaultText>
            </List.Item>
          )}
        />
      </div>
    </BentoBox>
  );
};
export default CharacterSkill;
