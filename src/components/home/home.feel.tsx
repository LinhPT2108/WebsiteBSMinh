"use client";

import { Card, Carousel, Col, Image, ListGroup, Row } from "react-bootstrap";

const HomeFeelComponent = () => {
  return (
    <div>
      <h2 className="pt-5 text-center">Cảm nhận của bệnh nhân sau điều trị</h2>
      <Row className="mt-1">
        <Col md={6} sm={12}>
          <Card className="home-feel--card">
            <Card.Img
              variant="top"
              src="/home/home-feel/gt-img.jpg"
              alt="gt-img.jpg"
            />
          </Card>
        </Col>
        <Col md={6} sm={12}>
          <Card className="home-feel--card">
            <Card.Body className="text-center">
              <Carousel data-bs-theme="dark">
                <Carousel.Item>
                  <Card.Img
                    variant="top"
                    src="/home/home-feel/khach-hang-phong-kham-bac-sy-diep-tu-du00006.jpg"
                    className="home-feel--image"
                    alt="khach-hang-phong-kham-bac-sy-diep-tu-du00006.jpg"
                  />
                  <h5>Các bé BS đỡ sanh</h5>
                  <p className="text-justify">
                    Ngọc Hân :Bác ơi con cảm ơn bác trong thời gian qua đã khám
                    va tư vấn nhiệt tình cho con. Nhờ bác đã cho con chích Hổ
                    trợ phổi nên con sinh be o tuần 35 cũng đỡ được 1 phần. ngày
                    con di sanh cũng đúng ngày con lên bác khám lai luôn. Be cua
                    con 10ngay rồi, con sanh được 2k7 Con cảm ơn bác nhiều lắm
                  </p>
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img
                    variant="top"
                    src="/home/home-feel/khach-hang-phong-kham-bac-sy-diep-tu-du00007.jpg"
                    className="home-feel--image"
                    alt="khach-hang-phong-kham-bac-sy-diep-tu-du00007.jpg"
                  />
                  <h5>Các bé BS đỡ sanh</h5>
                  <p className="text-justify">
                    Mai Hieu Huynh :Gia đình rất cảm ơn bác Điệp từ lúc mang
                    thai đến phòng khám bác,bác chỉ dẫn rất nhiệt tình tận
                    tâm,có thể nt ở fanpage hỏi bác rồi ở sdt những cái con chưa
                    biết.Đến lúc bác kêu đi nhập viện bác nói chuyện chỉ dẫn kêu
                    nt số phòng rồi gọi bác để bác qua níu bác bận thì bác nhờ
                    bs khác coi con nhưng qua sáng mai bác qua phòng rồi hỏi
                    thăm.Đến lúc con mổ bác là người đứng ra mổ cho con mà còn
                    kêu tên con động viên cố lên.Gđ con ko pít nói gì hơn thật
                    sự rất cảm ơn bác nay bé nhà con được 2m5d rồi.Con chúc bác
                    dồi dào sức khỏe phòng khám ngày càng có nhìu chị bầu vì bác
                    là người lun tận tâm ????❤
                  </p>
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img
                    variant="top"
                    src="/home/home-feel/khach-hang-phong-kham-bac-sy-diep-tu-du00008.jpg"
                    className="home-feel--image"
                    alt="khach-hang-phong-kham-bac-sy-diep-tu-du00008.jpg"
                  />
                  <h5>Các bé BS đỡ sanh</h5>
                  <p className="text-justify">
                    Ngọc Hân :Bác ơi con cảm ơn bác trong thời gian qua đã khám
                    va tư vấn nhiệt tình cho con. Nhờ bác đã cho con chích Hổ
                    trợ phổi nên con sinh be o tuần 35 cũng đỡ được 1 phần. ngày
                    con di sanh cũng đúng ngày con lên bác khám lai luôn. Be cua
                    con 10ngay rồi, con sanh được 2k7 Con cảm ơn bác nhiều lắm
                  </p>
                </Carousel.Item>
              </Carousel>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default HomeFeelComponent;
