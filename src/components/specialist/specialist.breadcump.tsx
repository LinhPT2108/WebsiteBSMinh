"use client";
import { Breadcrumb, Container } from "react-bootstrap";

const SpecialistBreadcumpComponent = () => {
  return (
    <div>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="">Library</Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
    </div>
  );
};

export default SpecialistBreadcumpComponent;
