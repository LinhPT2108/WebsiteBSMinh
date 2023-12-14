"use client";

import { Card, Col, Image, ListGroup, Row } from "react-bootstrap";

const HomeAboutComponent = () => {
  return (
    <Row className="d-flex mb-5">
      <Col lg={6} md={6} sm={12} className="pt-5">
        <Card className="border-0">
          <Card.Img
            variant="top"
            src="/home/home-about/phong-kham-bac-si-diep-125.jpg"
            className="about-image--custom"
            alt="phong-kham-bac-si-diep-125.jpg"
          />
        </Card>
      </Col>
      <Col lg={6} md={6} sm={12} className="pt-5">
        <ListGroup className="text-center px-3 d-flex align-items-center justify-content-center">
          <ListGroup.Item className="list-group--custom fs-4 py-0">
            Đôi Nét Về Bác Sĩ
          </ListGroup.Item>
          <ListGroup.Item className="list-group--custom text-danger fw-bolder pt-0">
            <h3>Phạm Thị Ngọc Điệp</h3>
          </ListGroup.Item>
          <ListGroup.Item className="list-group--custom fs-5">
            Là bác sĩ đầu ngành trong lĩnh vực sản phụ khoa tại Tp. HCM hiện
            nay, bác sĩ Phạm Thị Ngọc Điệp tốt nghiệp đại học chính quy trường
            Đại học Y Dược Tp. HCM từ năm 1990, hiện nay đang công tác tại bệnh
            viện Từ Dũ.
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
};

export default HomeAboutComponent;
