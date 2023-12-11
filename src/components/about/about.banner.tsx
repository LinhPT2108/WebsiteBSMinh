"use client";

import Link from "next/link";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const AboutBannerComponent = () => {
  return (
    <div>
      <div className="banner-bg">
        <Container className="about-banner--content">
          <Row>
            <Col lg={6} md={6} xs={6}></Col>
            <Col
              lg={6}
              md={6}
              xs={6}
              className="bg-loaded d-flex align-items-lg-end align-items-md-start"
            >
              <div className="about-banner--contact">
                <div className="text-center">
                  <h6 className="fs-6 fw-bold about-banner--title mt-4">
                    PHÒNG KHÁM PHỤ KHOA – BÁC SỸ PHẠM THỊ NGỌC ĐIỆP
                  </h6>
                  <p>
                    Qua nhiều năm công tác bác sĩ Phạm Thị Ngọc điệp trên mỗi vị
                    trí của mình đều đạt được những thành công đáng kể, là nơi
                    gửi gắm sự tin tưởng cho nhiều thế hệ bệnh nhân và đem đến
                    niềm vui cho nhiều gia đình hiếm muộn.
                  </p>
                  <Link href="/" className="about-banner--button">
                    <span className="button-contact">
                      <i className="bi bi-telephone-fill"></i>
                      <span className="button-contact--text">LIÊN HỆ</span>
                    </span>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutBannerComponent;
