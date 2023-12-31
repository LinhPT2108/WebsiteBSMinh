"use client";

import { Card, Col, Container, Row } from "react-bootstrap";

const HomeServiceComponent = () => {
  return (
    <div className="home-service--bg pb-5">
      <Container>
        <h2 className="title-Counsel pt-4 text-center">
          Dịch vụ của chúng tôi
        </h2>
        <Row className="mt-4">
          <Col lg={6} md={6} sm={6} xs={12} className="mt-3">
            <Card className="home-service--custom__image">
              <Card.Img
                variant="top"
                className="home-service--custom__image"
                src="/home/home-service/dich-vu-dieu-tri-vo-sinh.png"
                alt="dich-vu-dieu-tri-vo-sinh.png"
              />
            </Card>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12} className="mt-3">
            <Card className="home-service--custom__image">
              <Card.Img
                variant="top"
                className="home-service--custom__image"
                src="/home/home-service/dich-vu-dieu-tri-vo-sinh.png"
                alt="dich-vu-dieu-tri-vo-sinh.png"
              />
            </Card>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12} className="mt-3">
            <Card className="home-service--custom__image">
              <Card.Img
                variant="top"
                className="home-service--custom__image"
                src="/home/home-service/dich-vu-dieu-tri-vo-sinh.png"
                alt="dich-vu-dieu-tri-vo-sinh.png"
              />
            </Card>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12} className="mt-3">
            <Card className="home-service--custom__image">
              <Card.Img
                variant="top"
                className="home-service--custom__image"
                src="/home/home-service/dich-vu-dieu-tri-vo-sinh.png"
                alt="dich-vu-dieu-tri-vo-sinh.png"
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeServiceComponent;
