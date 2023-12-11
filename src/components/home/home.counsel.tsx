"use client";

import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const HomeCounselComponent = () => {
  return (
    <div className="home-counsel--background pb-5">
      <Container>
        <h2 className="title-Counsel pt-4 text-center">Chuyên Khoa</h2>
        <Row className="mt-4">
          <Col lg={4} md={4}>
            <Card className="home-counsel--card">
              <Card.Img
                variant="top"
                src="/home/home-counsel/dich-vu-sieu-am.png"
                className="p-5"
              />
              <Card.Body className="text-center">
                <Card.Title className="text-dark">SIÊU ÂM</Card.Title>
                <Card.Text className="px-2 pb-2">
                  Siêu âm được thực hiện không quá phức tạp và có thể chẩn đoán
                  được nhiều dấu hiệu khác thường cũng như kiểm tra sức khỏe
                  sinh sản ở chị em.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={4}>
            <Card className="home-counsel--card">
              <Card.Img
                variant="top"
                src="/home/home-counsel/san-khoa.png"
                className="p-5"
              />
              <Card.Body className="text-center">
                <Card.Title className="text-dark">SẢN KHOA</Card.Title>
                <Card.Text className="px-2 pb-2">
                  Cung cấp dịch vụ thăm khám, kiểm tra định kỳ và chăm sóc sức
                  khỏe cho bà mẹ cùng em bé ngay những tháng đầu thai kỳ cho đến
                  tận khi bé chào đời.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={4}>
            <Card className="home-counsel--card">
              <Card.Img
                variant="top"
                src="/home/home-counsel/phu-khoa.png"
                className="p-5"
              />
              <Card.Body className="text-center">
                <Card.Title className="text-dark">PHỤ KHOA</Card.Title>
                <Card.Text className="px-2 pb-2">
                  Chăm sóc phụ khoa luôn là nỗi niềm của nhiều chị em. Dịch vụ
                  chăm sóc, thăm khám và điều trị các vấn đề liên quan đến phụ
                  khoa giúp chị em luôn tự tin và tận hưởng cuộc sống.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeCounselComponent;
