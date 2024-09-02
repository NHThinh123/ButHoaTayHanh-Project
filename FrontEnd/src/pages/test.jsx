import BentoBox from "../components/atoms/bento-box";
import BentoGrid from "../components/atoms/bento-grid";

const TestPage = () => {
  return (
    <BentoGrid lg={12}>
      <BentoBox>
        <BentoBox
          height={100}
          backgroundColor={"blue"}
          style={{ backgroundColor: "green" }}
        />
      </BentoBox>
      <BentoBox>
        <BentoBox height={100} backgroundColor={"blue"} />
      </BentoBox>
      <BentoBox>
        <BentoBox height={100} backgroundColor={"blue"} />
      </BentoBox>
      <BentoBox>
        <BentoBox height={100} backgroundColor={"blue"} />
      </BentoBox>
    </BentoGrid>
  );
};
export default TestPage;
