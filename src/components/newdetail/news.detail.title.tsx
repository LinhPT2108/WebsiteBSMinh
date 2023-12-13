"use client";
import { useEffect, useState } from "react";
import {
  Container,
  Accordion,
  Card,
  Col,
  Row,
  Breadcrumb,
  Image,
  ListGroup,
} from "react-bootstrap";
const NewsDeatailTitleComponent = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  useEffect(() => {
    setIsAccordionOpen(false);
  }, []);
  return (
    <div className="NewDetail_title container mb-3 ">
      <p>
        <strong className="news-detai-title mb-2">
          Tìm kiếm phòng khám phụ sản gần nhất tại TPHCM đang khiến nhiều chị em
          đau đầu. Khám sản phụ khoa là nhu cầu cần thiết của nữ giới vì liên
          quan trực tiếp tới sức khỏe và thiên chức làm mẹ. Hãy tham khảo địa
          chỉ phòng khám phụ sản tốt ngay tại TPHCM mà chúng tôi giới thiệu ngay
          sau đây.
        </strong>
      </p>

      <Accordion
        defaultActiveKey="0"
        flush
        className="newdetail-accordion"
        activeKey={isAccordionOpen ? "0" : null}
      >
        <Accordion.Item eventKey="0" className="border-1 rounded">
          <Accordion.Header
            className="header_acordion "
            onClick={() => setIsAccordionOpen(!isAccordionOpen)}
          >
            Mục lục bài viết
          </Accordion.Header>
          <Accordion.Body className="py-0">
            <ListGroup as="ol" numbered>
              <ListGroup.Item as="li" className="border-0">
                <a href="" className="text-decoration-none text-dark">
                  Phòng khám phụ khoa tốt nhất ở TPHCM là cơ sở nào?
                </a>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="border-0">
                <a href="" className="text-decoration-none text-dark">
                  Vì sao phòng khám sản phụ khoa bác sĩ Điệp được đánh giá tốt
                  nhất?
                </a>
                <ListGroup.Item as="li" className="border-0">
                  <a href="" className="text-decoration-none text-dark">
                    2.1 Quy tụ đội ngũ bác sĩ giỏi chuyên môn, tận tâm với nghề
                  </a>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="border-0">
                  <a href="" className="text-decoration-none text-dark">
                    2.2 Phòng khám phụ khoa Bác Sĩ Điệp đã được cấp phép hoạt
                    động minh bạch
                  </a>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="border-0">
                  <a href="" className="text-decoration-none text-dark">
                    2.3 Phòng khám phụ khoa tốt có trang bị cơ sở vật chất hiện
                    đại bậc nhất
                  </a>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="border-0">
                  <a href="" className="text-decoration-none text-dark">
                    2.4 Dịch vụ khám chữa bệnh đa dạng
                  </a>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="border-0">
                  <a href="" className="text-decoration-none text-dark">
                    2.5 Chi phí khám chữa hợp lý
                  </a>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="border-0">
                  <a href="" className="text-decoration-none text-dark">
                    2.6 Chất lượng dịch vụ chuyên nghiệp
                  </a>
                </ListGroup.Item>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="border-0">
                Những lưu ý khi thăm khám phụ khoa bạn cần biết
                <ListGroup.Item as="li" className="border-0">
                  <a href="" className="text-decoration-none text-dark">
                    3.1 Thời gian khám phụ khoa thích hợp
                  </a>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="border-0">
                  <a href="" className="text-decoration-none text-dark">
                    3.2 Không nên quan hệ trước khi khám phụ khoap
                  </a>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="border-0">
                  <a href="" className="text-decoration-none text-dark">
                    3.3 Vệ sinh vùng kín trước và sau khi khám phụ khoa
                  </a>
                </ListGroup.Item>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default NewsDeatailTitleComponent;
