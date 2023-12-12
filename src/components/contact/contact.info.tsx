"use client";

import { Col, Row, Breadcrumb, Image } from "react-bootstrap";

const ContactInfoComponent = () => {
  return (
    <div className="contact-info">
      <div className="container">
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
            Liên Hệ
          </Breadcrumb.Item>
        </Breadcrumb>
        <p className="contact-info--text">
          <h3>PHÒNG KHÁM SẢN PHỤ KHOA</h3>
          <h3>BÁC SỸ PHẠM NGỌC DIỆP</h3>
        </p>
        <p className="image-box">
          <Image
            src="/home/home-about/phong-kham-bac-si-diep-125.jpg"
            className="image-contact"
          />
        </p>
        <Row className="py-5">
          <Col lg={6} md={6} xs={12}>
            <p>
              Phòng khám sản phụ khoa Bác sỹ Phạm Thị Ngọc Điệp, địa chỉ khám
              bệnh cho sản phụ khoa uy tín hơn 30 năm qua
            </p>
            <h3>
              <span className="contact-info-titletext">
                MẸ TRÒN - CON VUÔNG
              </span>
            </h3>
            <p>
              Với kinh nghiệm, sự tận tâm và hết lòng của đội ngũ y bác sỹ tại
              phòng khám, nhiều năm qua phòng khám sản phụ khoa Bác sỹ Phạm Thị
              Ngọc Điệp đã nhận được nhiều sự tin cậy của hàng ngàn sản phụ, đó
              là niềm vinh hạnh của chúng tôi.
            </p>
          </Col>
          <Col lg={3} md={3} xs={12}>
            <h3>
              <span className="contact-info-titletext">ĐỊA CHỈ</span>
            </h3>
            <p>271 Nguyễn Duy Dương, Phường 4, Quận 10</p>
            <h3>
              <span className="contact-info-titletext">SỐ ĐIỆN THOẠI</span>
            </h3>
            <p>0335155192</p>
          </Col>
          <Col lg={3} md={3} xs={12}>
            <h3>
              <span className="contact-info-titletext">THỜI GIAN LÀM VIỆC</span>
            </h3>
            <p>T2-T7:17h đến 20h30</p>
            <p>Sáng CN:7h30 đến 10h30</p>
            <h3>
              <span className="contact-info-titletext">KẾT NỐI</span>
            </h3>
            <p>Email: bsdiepbvtudu@gmail.com</p>
            <p>Website: https://sanphukhoatudu-bsdiep.com/</p>
            <p>Fanpage: https://fb.com/Sanphukhoatudu.bsdiep/</p>
            <div className="fs-3 d-flex justify-content-around">
              <a href="#">
                <i className="bi bi-facebook text-primary"></i>
              </a>
              <a href="#">
                <i className="bi bi-twitter-x text-black"></i>
              </a>
              <a href="">
                <i className="bi bi-envelope-arrow-up-fill"></i>
              </a>
              <a href="">
                <i className="bi bi-pinterest text-danger"></i>
              </a>
              <a href="">
                <i className="bi bi-linkedin text-info"></i>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default ContactInfoComponent;
