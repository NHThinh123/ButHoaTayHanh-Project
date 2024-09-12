import BentoBox from "../../../components/atoms/bento-box";
import DefaultText from "../../../components/atoms/default-text";
import DefaultTitle from "../../../components/atoms/default-title";

const CharacterSkill = () => {
  return (
    <BentoBox padding={16} minHeight={200}>
      <DefaultTitle style={{ fontWeight: 700, fontSize: 18 }}>
        Đánh thường (CD: 1)
      </DefaultTitle>
      <div style={{ margin: 12 }}>
        <DefaultText>
          Gây sát thương bằng 120% tấn công cho 1 kẻ địch và xóa bỏ mọi hiệu ứng
          cường hóa của mục tiêu.
        </DefaultText>
      </div>
      <div style={{ margin: "12px 24px" }}>
        <DefaultText>
          o 7 sao: Thêm Đánh dấu lên mục tiêu, duy trì 2 lượt
        </DefaultText>
        <DefaultText>o 9 sao: Kỹ năng có thể Khóa mọi mục tiêu</DefaultText>
        <DefaultText>
          o Sát thương kĩ năng tăng lên bằng 150% tấn công{" "}
        </DefaultText>
        <DefaultText>o Thời gian hồi chiêu -1</DefaultText>
      </div>
    </BentoBox>
  );
};
export default CharacterSkill;
