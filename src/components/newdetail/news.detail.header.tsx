"use client";
import { Container, Card, Col, Row, Breadcrumb, Image } from "react-bootstrap";
const NewsDeatailHeaderComponent = () => {
  return (
    <div className="NewDetail_Header container mb-5">
      <Container>
        <Row>
          <Col lg={9} md={12}>
            <Breadcrumb>
              <Breadcrumb.Item
                href="#"
                className="contact-info--url contact-info--url__home"
              >
                Trang Chủ
              </Breadcrumb.Item>
              <Breadcrumb.Item
                href="#"
                className="contact-info--url contact-info--url__contact"
              >
                Tin Tức
              </Breadcrumb.Item>
            </Breadcrumb>

            <header>
              <div className="header-text">
                <h2 className="news-header-text">
                  Phòng khám phụ sản gần nhất TPHCM bạn nên biết
                </h2>
              </div>
              <div>
                <span>
                  Đăng ngày
                  <a href="" className="text-decoration-none">
                    <time
                      className="px-2 text-dark "
                      dateTime="2023-01-27T00:00:00+07:00"
                    >
                      2023-01-27
                    </time>
                  </a>
                </span>
              </div>
            </header>
            <span className="byline"></span>
          </Col>
          <Col lg={3} md={12}></Col>
        </Row>
      </Container>
    </div>
  );
};
export default NewsDeatailHeaderComponent;
