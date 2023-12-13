"use client";

import { Card, Col, Container, Row } from "react-bootstrap";
import AsideComponent from "./app.aside";

interface IPros {
  blogs: IBlog[];
}

const AppSpecialtyCounselComponent = (pros: IPros) => {
  const { blogs } = pros;
  return (
    <div>
      <Container>
        <Row>
          <Col lg={9} md={12}>
            {blogs?.map((blog, index) => {
              return (
                <Row key={index} className="mb-3">
                  <Col lg={5} md={5} xs={6}>
                    <Card className="border-0">
                      <Card.Img
                        variant="top"
                        src={`/specialty-counsel/${blog.image}`}
                      />
                    </Card>
                  </Col>
                  <Col lg={7} md={7} xs={6}>
                    <Card className="d-flex h-100 border-0">
                      <Card.Body className="pt-0">
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text className="text-justify">
                          {blog.content}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              );
            })}
          </Col>
          <Col lg={3} md={12} className="ps-0 pe-5">
            <AsideComponent/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppSpecialtyCounselComponent;
