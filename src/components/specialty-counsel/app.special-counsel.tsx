"use client";

import { Card, Col, Container, Row } from "react-bootstrap";

interface IPros {
  blogs: IBlog[];
}

const AppSpecialtyCounselComponent = (pros: IPros) => {
  const { blogs } = pros;
  return (
    <div>
      <Container>
        {blogs?.map((blog, index) => {
          return (
            <Row key={index} className="mb-3">
              <Col lg={9} md={12}>
                <Row>
                  <Col lg={5} md={5} xs={6}>
                    <Card className="border-0">
                      <Card.Img
                        variant="top"
                        src={`/specialty-counsel/${blog.image}`}
                      />
                    </Card>
                  </Col>
                  <Col lg={7} md={7} xs={6}>
                    <Card className="d-flex h-100 align-items-center">
                      <Card.Body className="">
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>{blog.content}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col lg={3} md={12}></Col>
            </Row>
          );
        })}
      </Container>
    </div>
  );
};

export default AppSpecialtyCounselComponent;
