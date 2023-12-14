"use client";

import Link from "next/link";
import { Card, Col, Container, Row } from "react-bootstrap";

const AboutContentComponent = () => {
  return (
    <Container className="my-5 space-top--custom">
      <Row>
        <Col lg={6} md={6} className="mb-5">
          <Card>
            <Card.Img
              variant="top"
              src="/home/home-news/Tap-the-bac-sy-phong-kham-ngoc-diep-1536x1152.jpg"
              alt="Tap-the-bac-sy-phong-kham-ngoc-diep-1536x1152.jpg"
            />
          </Card>
        </Col>
        <Col lg={6} md={6}>
          <h4 className="about-content--title fw-bold">
            GIỚI THIỆU PHÒNG KHÁM SẢN PHỤ KHOA
          </h4>
          <h2>BÁC SỸ PHẠM THỊ NGỌC ĐIỆP</h2>
          <p className="text-justify">
            Phòng khám sản phụ khoa của do bác sĩ Phạm Thị Ngọc Điệp thành lập
            tại tp. HCM qua nhiều năm hoạt động được biết đến là một trong những
            phòng khám sản phụ khoa có chất lượng khám chữa bệnh hàng đầu hiện
            nay. Với sự thăm khám của bác sĩ có chuyên môn cao và kinh nghiệm
            nhiều năm trong nghề, phòng khám hoạt động với mục đích giúp chị em
            có được sức khỏe tốt nhất.
            <br />
            <br />
            Cùng với sự tham gia thăm khám của đội ngũ nhân viên chuyên môn cao,
            phòng khám cũng được đầu tư trang bị nhiều trang thiết bị hiện đại
            phục vụ thăm khám. Các thiết bị hiện đại được trang bị tại phòng
            khám có thể kể đến như máy siêu âm, máy soi cổ tử cung, …Những trang
            thiết bị hiện đại được trang bị cho phòng khám giúp cho có thể trợ
            giúp bác sĩ đưa ra những chẩn đoán chính xác và an toàn nhất.
            <br />
            <br />
            Với tiêu chí khám chữa bệnh lương y như từ mẫu, khi bệnh nhân đến
            thăm khám tại phòng khám sản phụ khoa Phạm Thị Ngọc Điệp sẽ được
            chăm sóc tận tâm, chẩn đoán chính xác và điều trị tốt nhất.
          </p>
          <Link href="/" className="about-content--button px-4">
            LIÊN HỆ NGAY
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutContentComponent;
