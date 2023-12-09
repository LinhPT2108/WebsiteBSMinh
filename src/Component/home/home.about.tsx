"use client";

import { Image, ListGroup } from "react-bootstrap";

const HomeAboutComponent = () => {
  return (
    <div className="d-flex">
      <Image
        src="/home/home-about/phong-kham-bac-si-diep-125.jpg"
        width={570}
        height={444}
        className="about-image--custom"
      />
      <ListGroup className="text-center px-3 d-flex align-items-center justify-content-center">
        <ListGroup.Item className="list-group--custom fs-4 py-0">
          Đôi Nét Về Bác Sĩ
        </ListGroup.Item>
        <ListGroup.Item className="list-group--custom text-danger fw-bolder pt-0">
          <h3>Phạm Thị Ngọc Điệp</h3>
        </ListGroup.Item>
        <ListGroup.Item className="list-group--custom fs-5">
          Là bác sĩ đầu ngành trong lĩnh vực sản phụ khoa tại Tp. HCM hiện nay,
          bác sĩ Phạm Thị Ngọc Điệp tốt nghiệp đại học chính quy trường Đại học
          Y Dược Tp. HCM từ năm 1990, hiện nay đang công tác tại bệnh viện Từ
          Dũ.
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default HomeAboutComponent;
