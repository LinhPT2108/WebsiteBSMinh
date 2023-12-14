"use client";

import { Col, Container, ListGroup, Row } from "react-bootstrap";

const AppFooter = () => {
  return (
    <div className="footer-bg--custom py-3">
      <Container>
        <Row>
          <Col md={5}>
            <ListGroup>
              <ListGroup.Item className="list-group--custom footer-bg--custom text-white">
                <h4>PHÒNG KHÁM SẢN PHỤ KHOA</h4>
              </ListGroup.Item>
              <ListGroup.Item className="list-group--custom footer-bg--custom text-white">
                <h5>BS - CKII: Phạm Thị Ngọc Điệp</h5>
              </ListGroup.Item>
              <ListGroup.Item className="list-group--custom footer-bg--custom text-white">
                Địa chỉ: 271 Nguyễn Duy Dương, Phường 4, Quận 10
              </ListGroup.Item>
              <ListGroup.Item className="list-group--custom footer-bg--custom text-white">
                Email: bsdiepbvtudu@gmail.com
              </ListGroup.Item>
              <ListGroup.Item className="list-group--custom footer-bg--custom text-white">
                Hotline: 0335 155 192
              </ListGroup.Item>
              <ListGroup.Item className="list-group--custom footer-bg--custom text-white">
                Website: SanPhuKhoaTuDu-BsDiep.com
              </ListGroup.Item>
              <ListGroup.Item className="list-group--custom footer-bg--custom text-white">
                Fanpage: fb.com/SanPhuKhoaTuDu.bsdiep
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <ListGroup>
              <ListGroup.Item className="list-group--custom footer-bg--custom text-white">
                <h5>DỊCH VỤ</h5>
              </ListGroup.Item>
              <ListGroup.Item className="list-group--custom footer-bg--custom text-white">
                Dịch Vụ Khám Thai
              </ListGroup.Item>
              <ListGroup.Item className="list-group--custom footer-bg--custom text-white">
                Dịch Vụ Siêu Âm
              </ListGroup.Item>
              <ListGroup.Item className="list-group--custom footer-bg--custom text-white">
                Dịch Vụ Khám Phụ Khoa
              </ListGroup.Item>
              <ListGroup.Item className="list-group--custom footer-bg--custom text-white">
                Dịch Vụ Điều Trị Vô Sinh
              </ListGroup.Item>
              <ListGroup.Item className="list-group--custom footer-bg--custom text-white">
                Dịch Vụ Tầm Soát Ung Thư Vú, Ung Thư Cổ Tử Cung
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup>
              <ListGroup.Item className="list-group--custom footer-bg--custom text-white">
                LỊCH KHÁM
              </ListGroup.Item>
              <ListGroup.Item className="list-group--custom footer-bg--custom text-white">
                Từ T2 đến T6: 17h đến 20:30h
              </ListGroup.Item>
              <ListGroup.Item className="list-group--custom footer-bg--custom text-white">
                Sáng T7: 7:30h đến 10:30h
              </ListGroup.Item>
              <ListGroup.Item className="list-group--custom footer-bg--custom text-white">
                Chủ Nhật: 17h đến 20h
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AppFooter;
