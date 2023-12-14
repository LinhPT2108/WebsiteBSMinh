"use client";

import { Col, Row, Form, Button } from "react-bootstrap";

const ContactFormComponent = () => {
  return (
    <div className="mb-5 container">
      <Row>
        <Col lg={2} md={2} sm={12}></Col>
        <Col lg={8} md={8} sm={12}>
          <div>
            <h3 className="pt-5 mb-3 text-center fw-bold">
              <span> LIÊN HỆ </span>
            </h3>
            <Form className="text-center">
              <Row>
                <Form.Group
                  as={Col}
                  // column
                  lg={6}
                  md={6}
                  xs={12}
                  controlId="formGridPassword"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Tên của bạn"
                    className="fs-4"
                  />
                </Form.Group>
                <Form.Group
                  as={Col}
                  // column
                  lg={6}
                  md={6}
                  xs={12}
                  controlId="formGridEmail"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="Email của bạn"
                    className="fs-4"
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control
                  type="text"
                  placeholder="Số điện thoại"
                  className="fs-4"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Nội dung"
                  className="fs-4"
                />
              </Form.Group>

              <Button variant="warning text-white fw-bold" type="submit">
                GỬI YÊU CẦU
              </Button>
            </Form>
          </div>
        </Col>
        <Col lg={2} md={2} sm={12}></Col>
      </Row>
    </div>
  );
};
export default ContactFormComponent;
