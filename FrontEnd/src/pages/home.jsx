import { Carousel, Col, Row } from "antd";

const HomePage = () => {
  return (
    <Row>
      <Col span={16} style={{ backgroundColor: "red" }}>
        <Carousel arrows infinite={true} style={{ height: "210px" }}>
          <div>Slide 1</div>
          <div>Slide 2</div>
          <div>Slide 3</div>
          <div>Slide 4</div>
        </Carousel>
      </Col>
    </Row>
  );
};

export default HomePage;
