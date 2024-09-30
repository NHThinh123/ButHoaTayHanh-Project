import { useMemo } from "react";
import DefaultText from "../../../../components/atoms/default-text";
import TagCustom from "../../../../components/atoms/tag-custom";

const SkillDescription = ({ skillData, effectData }) => {
  const processedDescription = useMemo(() => {
    // Sắp xếp effectData theo độ dài của nameEffect giảm dần
    const sortedEffects = [...effectData].sort(
      (a, b) => b.nameEffect.length - a.nameEffect.length
    );

    // Tạo một biểu thức chính quy để tìm tất cả các hiệu ứng cùng một lúc
    const effectRegex = new RegExp(
      sortedEffects.map((e) => `(${e.nameEffect})`).join("|"),
      "gi"
    );

    // Tách chuỗi và xử lý
    const parts = skillData.split(effectRegex);

    return parts.map((part, index) => {
      const matchingEffect = sortedEffects.find((e) => {
        if (part) {
          return e.nameEffect.toLowerCase() === part.toLowerCase();
        }
      });

      if (matchingEffect) {
        return (
          <TagCustom key={index} color={matchingEffect.colorEffect} padding={5}>
            {part}
          </TagCustom>
        );
      }
      return part;
    });
  }, [skillData, effectData]);

  return <DefaultText>{processedDescription}</DefaultText>;
};

export default SkillDescription;
