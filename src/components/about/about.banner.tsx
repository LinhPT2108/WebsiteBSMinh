"use client";

import Link from "next/link";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const AboutBannerComponent = () => {
  return (
    <div>
      <div className="banner-bg">
        <Container className="about-banner--content">
          <Row>
            <Col lg={5} md={4} xs={4}></Col>
            <Col
              lg={7}
              md={8}
              xs={8}
              className="bg-loaded d-flex align-items-lg-end align-items-md-start"
            >
              <div className="about-banner--contact">
                <div
                  className="text-center text-box banner-layer x95 md-x95 lg-x95 y50 md-y50 lg-y50 res-text w-100"
                  id="text-box-1609997032"
                >
                  <div className="fs-6 fw-bold about-banner--title mt-4">
                    PHÒNG KHÁM PHỤ KHOA – BÁC SỸ PHẠM THỊ NGỌC ĐIỆP
                  </div>
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
