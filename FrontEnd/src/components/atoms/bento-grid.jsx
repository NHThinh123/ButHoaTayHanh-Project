import React from "react";
import { Row, Col } from "antd";

const BentoGrid = ({ children, xs, sm, md, lg }) => (
  <Row>
    {React.Children.map(children, (child, index) => (
      <Col xs={xs} sm={sm} md={md} lg={lg} key={index}>
        {child}
      </Col>
    ))}
  </Row>
);
BentoGrid.defaultProps = {
  lg: 24,
  md: 24,
  sm: 24,
  xs: 24,
};

export default BentoGrid;
