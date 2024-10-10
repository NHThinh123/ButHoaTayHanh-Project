import { Col, List, Row, Space } from "antd";

import DefaultText from "../../../../components/atoms/default-text";
import DefaultTitle from "../../../../components/atoms/default-title";

import BentoBox from "../../../../components/atoms/bento-box";
import SkillDescription from "../molecules/skill-description";
import TagCustom from "../../../../components/atoms/tag-custom";

const CharacterSkill = ({ skillData }) => {
  return (
    <BentoBox padding={16} minHeight={200} backgroundColor="#fff">
      {skillData.cooldown !== 0 ? (
        <DefaultTitle style={{ fontWeight: 700, fontSize: 18, margin: 12 }}>
          {`${skillData.title} (Hồi chiêu: ${skillData.cooldown} lượt):`}
        </DefaultTitle>
      ) : (
        <DefaultTitle style={{ fontWeight: 700, fontSize: 18, margin: 12 }}>
          {`${skillData.title} (Nội tại):`}
        </DefaultTitle>
      )}

      <div style={{ margin: 12 }}>
        <SkillDescription
          skillData={skillData.mainSkill}
          effectData={skillData.effectSkill}
        ></SkillDescription>
      </div>

      <div style={{ margin: "12px 24px" }}>
        {skillData.subSkill.length > 0 && (
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
        )}
      </div>

      <div style={{ margin: "12px" }}>
        {skillData.effectSkill.length > 0 && (
          <List
            grid={{
              gutter: 16,
              column: 1,
            }}
            dataSource={skillData.effectSkill}
            renderItem={(item) => (
              <List.Item>
                <Row>
                  <Col span={24}>
                    <Space
                      style={{ display: "flex", alignItems: "flex-start" }}
                    >
                      <TagCustom color={item.colorEffect} padding={5}>
                        {`${item.nameEffect} :`}
                      </TagCustom>
                      <DefaultText>{item.descriptionEffect}</DefaultText>
                    </Space>
                  </Col>
                </Row>
              </List.Item>
            )}
          />
        )}
      </div>
    </BentoBox>
  );
};
export default CharacterSkill;
