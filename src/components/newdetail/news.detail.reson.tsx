"use client";

import Link from "next/link";
import { Card, Col, Container, Row } from "react-bootstrap";

const NewsDetailReasonComponent = () => {
  return (
    <div>
      <h2 className="pt-2 text-right contact-info-titletext">
        Bài viết liên quan
      </h2>

      <Row className="mt-4">
        <Col lg={4} md={4} xs={12} className="mt-3">
          <Card className="news-reason--card">
            <Card.Img
              variant="top"
              src="/home/home-news/Tap-the-bac-sy-phong-kham-ngoc-diep-1536x1152.jpg"
              alt="Tap-the-bac-sy-phong-kham-ngoc-diep-1536x1152.jpg"
            />
            <Card.Body>
              <a
                href="#"
                className="text-dark fw-bold text-decoration-none fs-10"
              >
                Tuyển y tá , nữ hộ sinh phụ phòng khám
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={4} xs={12} className="mt-3">
          <Card className="news-reason--card">
            <Card.Img
              variant="top"
              src="/home/home-news/chichnguauongvanchomebau-3585.jpg"
              alt="chichnguauongvanchomebau-3585.jpg"
            />
            <Card.Body>
              <a
                href="#"
                className="text-dark fw-bold text-decoration-none fs-10"
              >
                Phòng khám phụ sản gần nhất TPHCM bạn nên biết
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={4} xs={12} className="mt-3">
          <Card className="news-reason--card">
            <Card.Img
              variant="top"
              src="/home/home-about/phong-kham-bac-si-diep-125.jpg"
              alt="phong-kham-bac-si-diep-125.jpg"
            />
            <Card.Body>
              <a
                href="#"
                className="text-dark fw-bold text-decoration-none fs-10"
              >
                Phòng khám phụ khoa tốt nhât, uy tín nhất thành phố TPHCM
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={4} md={4} xs={12} className="mt-3">
          <Card className="news-reason--card">
            <Card.Img
              variant="top"
              src="/home/home-about/phong-kham-bac-si-diep-125.jpg"
              alt="phong-kham-bac-si-diep-125.jpg"
            />
            <Card.Body>
              <Card.Text>
                <a
                  href="#"
                  className="text-dark fw-bold text-decoration-none fs-10"
                >
                  Phòng khám phụ khoa quận 5 tốt nhất bạn nên lựa chọn
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={4} xs={12} className="mt-3">
          <Card className="news-reason--card">
            <Card.Img
              variant="top"
              src="/home/home-about/phong-kham-bac-si-diep-125.jpg"
              alt="phong-kham-bac-si-diep-125.jpg"
            />
            <Card.Body>
              <Card.Text>
                <a
                  href="#"
                  className="text-dark fw-bold text-decoration-none fs-10"
                >
                  Phòng khám phụ khoa quận 5 tốt nhất bạn nên lựa chọn
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={4} xs={12} className="mt-3">
          <Card className="news-reason--card">
            <Card.Img
              variant="top"
              src="/home/home-about/phong-kham-bac-si-diep-125.jpg"
              alt="phong-kham-bac-si-diep-125.jpg"
            />
            <Card.Body>
              <Card.Text>
                <Link
                  href="#"
                  className="text-dark fw-bold text-decoration-none fs-10"
                >
                  Phòng khám phụ khoa quận 5 tốt nhất bạn nên lựa chọn
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default NewsDetailReasonComponent;
