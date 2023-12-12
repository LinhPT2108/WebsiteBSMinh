"use client";

import dynamic from "next/dynamic";
import { Card, Container } from "react-bootstrap";

const options = {
  responsive: {
    1024: {
      items: 4,
    },
    768: {
      items: 3,
    },
    480: {
      items: 2,
    },
    280: {
      items: 1,
    },
  },
};
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
const HomeSpecialtyComponent = () => {
  return (
    <div className="mb-2">
      <Container>
        <h2 className="title-Counsel pt-5 text-center">Tư vấn</h2>
        <OwlCarousel
          className="owl-theme mt-3"
          loop={true}
          items={4}
          responsiveRefreshRate={0}
          autoplay={true}
          autoplayTimeout={2000}
          autoplayHoverPause={true}
          nav={true}
          navText={[
            '<i class="bi bi-arrow-left-circle-fill" style="font-size: 40px;"></i>',
            '<i class="bi bi-arrow-right-circle-fill" style="font-size: 40px;"></i>',
          ]}
          margin={20}
          {...options}
        >
          <div className="item">
            <Card>
              <Card.Img
                variant="top"
                src="/home/home-news/Tap-the-bac-sy-phong-kham-ngoc-diep-1536x1152.jpg"
              />
              <Card.Body className="text-center">
                <Card.Title>
                  Phòng khám phụ khoa tốt nhât, uy tín nhất thành phố TPHCM
                </Card.Title>
                <Card.Text>
                  Phòng khám phụ khoa tốt nhất thành phố Hồ Chí Minh 2021,
                  giá...
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="item">
            <Card>
              <Card.Img
                variant="top"
                src="/home/home-news/Tap-the-bac-sy-phong-kham-ngoc-diep-1536x1152.jpg"
              />
              <Card.Body className="text-center">
                <Card.Title>
                  Phòng khám phụ khoa tốt nhât, uy tín nhất thành phố TPHCM
                </Card.Title>
                <Card.Text>
                  Phòng khám phụ khoa tốt nhất thành phố Hồ Chí Minh 2021,
                  giá...
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="item">
            <Card>
              <Card.Img
                variant="top"
                src="/home/home-news/Tap-the-bac-sy-phong-kham-ngoc-diep-1536x1152.jpg"
              />
              <Card.Body className="text-center">
                <Card.Title>
                  Phòng khám phụ khoa tốt nhât, uy tín nhất thành phố TPHCM
                </Card.Title>
                <Card.Text>
                  Phòng khám phụ khoa tốt nhất thành phố Hồ Chí Minh 2021,
                  giá...
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="item">
            <Card>
              <Card.Img
                variant="top"
                src="/home/home-news/Tap-the-bac-sy-phong-kham-ngoc-diep-1536x1152.jpg"
              />
              <Card.Body className="text-center">
                <Card.Title>
                  Phòng khám phụ khoa tốt nhât, uy tín nhất thành phố TPHCM
                </Card.Title>
                <Card.Text>
                  Phòng khám phụ khoa tốt nhất thành phố Hồ Chí Minh 2021,
                  giá...
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="item">
            <Card>
              <Card.Img
                variant="top"
                src="/home/home-news/Tap-the-bac-sy-phong-kham-ngoc-diep-1536x1152.jpg"
              />
              <Card.Body className="text-center">
                <Card.Title>
                  Phòng khám phụ khoa tốt nhât, uy tín nhất thành phố TPHCM
                </Card.Title>
                <Card.Text>
                  Phòng khám phụ khoa tốt nhất thành phố Hồ Chí Minh 2021,
                  giá...
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="item">
            <Card>
              <Card.Img
                variant="top"
                src="/home/home-news/Tap-the-bac-sy-phong-kham-ngoc-diep-1536x1152.jpg"
              />
              <Card.Body className="text-center">
                <Card.Title>
                  Phòng khám phụ khoa tốt nhât, uy tín nhất thành phố TPHCM
                </Card.Title>
                <Card.Text>
                  Phòng khám phụ khoa tốt nhất thành phố Hồ Chí Minh 2021,
                  giá...
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="item">
            <Card>
              <Card.Img
                variant="top"
                src="/home/home-news/Tap-the-bac-sy-phong-kham-ngoc-diep-1536x1152.jpg"
              />
              <Card.Body className="text-center">
                <Card.Title>
                  Phòng khám phụ khoa tốt nhât, uy tín nhất thành phố TPHCM
                </Card.Title>
                <Card.Text>
                  Phòng khám phụ khoa tốt nhất thành phố Hồ Chí Minh 2021,
                  giá...
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="item">
            <Card>
              <Card.Img
                variant="top"
                src="/home/home-news/Tap-the-bac-sy-phong-kham-ngoc-diep-1536x1152.jpg"
              />
              <Card.Body className="text-center">
                <Card.Title>
                  Phòng khám phụ khoa tốt nhât, uy tín nhất thành phố TPHCM
                </Card.Title>
                <Card.Text>
                  Phòng khám phụ khoa tốt nhất thành phố Hồ Chí Minh 2021,
                  giá...
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </OwlCarousel>
      </Container>
    </div>
  );
};
export default HomeSpecialtyComponent;
