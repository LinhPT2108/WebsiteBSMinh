"use client";

import { Card, Col, Container, Row } from "react-bootstrap";

const HomReasonComponent = () => {
  return (
    <div className="home-reasom--bg">
      <Container>
        <h2 className="pt-5 text-center">Lý do đến với phòng khám chúng tôi</h2>
        <Row className="mt-4">
          <Col lg={2} md={4} xs={6} className="mt-3">
            <Card className="home-reason--card">
              <Card.Img variant="top" src="/home/home-reason/hands.png" />
              <Card.Body>
                <Card.Text>Hướng tới mẹ tròn con vuông</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={2} md={4} xs={6} className="mt-3">
            <Card className="home-reason--card">
              <Card.Img
                variant="top"
                src="/home/home-reason/consultation.png"
              />
              <Card.Body>
                <Card.Text>Tư vấn nhiệt tình, an tâm hài lòng</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={2} md={4} xs={6} className="mt-3">
            <Card className="home-reason--card">
              <Card.Img variant="top" src="/home/home-reason/doctor.png" />
              <Card.Body>
                <Card.Text>Bác sĩ giỏi, giàu kinh nghiệm</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={2} md={4} xs={6} className="mt-3">
            <Card className="home-reason--card">
              <Card.Img variant="top" src="/home/home-reason/lamp.png" />
              <Card.Body>
                <Card.Text>Phương châm hoạt động tận tâm tậm tình</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={2} md={4} xs={6} className="mt-3">
            <Card className="home-reason--card">
              <Card.Img variant="top" src="/home/home-reason/reputation.png" />
              <Card.Body>
                <Card.Text>Hướng tới uy tín chất lượng</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={2} md={4} xs={6} className="mt-3">
            <Card className="home-reason--card">
              <Card.Img variant="top" src="/home/home-reason/ultrasound.png" />
              <Card.Body>
                <Card.Text>Sử dụng kỹ thuật tiên tiến nhất</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomReasonComponent;
