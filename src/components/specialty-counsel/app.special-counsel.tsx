"use client";

import {
  Breadcrumb,
  Card,
  Col,
  Container,
  Pagination,
  Row,
} from "react-bootstrap";
import AsideComponent from "./app.aside";

interface IPros {
  blogs: IBlog[];
  path: IPath;
}

const AppSpecialtyCounselComponent = (pros: IPros) => {
  const { blogs, path } = pros;

  return (
    <div className="my-3">
      <Container>
        <Row>
          <Col lg={9} md={12}>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
              {path?.childSpecialty === "gynecology" ? (
                <Breadcrumb.Item href="/phu-khoa" active>
                  Phụ khoa
                </Breadcrumb.Item>
              ) : path?.childSpecialty === "tests" ? (
                <Breadcrumb.Item href="/xet-nghiem" active>
                  Xét nghiệm
                </Breadcrumb.Item>
              ) : path?.childSpecialty === "obstetrics" ? (
                <Breadcrumb.Item href="/san-khoa" active>
                  Sản khoa
                </Breadcrumb.Item>
              ) : path?.childSpecialty === "ultrasound" ? (
                <Breadcrumb.Item href="/sieu-am" active>
                  Siêu âm
                </Breadcrumb.Item>
              ) : (
                ""
              )}
            </Breadcrumb>
            {blogs?.map((blog, index) => {
              return (
                <Row key={index} className="mb-3">
                  <Col lg={5} md={5} xs={12}>
                    <Card className="border-0">
                      <Card.Img
                        variant="top"
                        src={`/specialty-counsel/${blog.image}`}
                      />
                    </Card>
                  </Col>
                  <Col lg={7} md={7} xs={12}>
                    <Card className="d-flex h-100 border-0">
                      <Card.Body className="pt-0 special-counsel--body">
                        <Card.Title className="special-counsel--title">
                          {blog.title}
                        </Card.Title>
                        <Card.Text className="text-justify special-counsel--content">
                          {blog.content}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              );
            })}
          </Col>
          <Col lg={3} md={12}>
            <AsideComponent />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppSpecialtyCounselComponent;
