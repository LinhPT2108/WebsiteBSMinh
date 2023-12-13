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
import ReactPaginate from "react-paginate";
import { useState } from "react";

interface IPros {
  blogs: IBlog[];
  path: IPath;
  page: number;
  onPageChange: (newPage: number) => void;
}

const AppSpecialtyCounselComponent = (pros: IPros) => {
  const { blogs, path, page } = pros;
  const handlePageClick = (event: any) => {
    const newPage = +event.selected + 1;
    pros.onPageChange(newPage);
  };

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
              ) : path?.childSpecialty === "infertility" ? (
                <Breadcrumb.Item href="/vo-sinh" active>
                  Vô sinh
                </Breadcrumb.Item>
              ) : path?.childSpecialty === "immunizations" ? (
                <Breadcrumb.Item href="/chich-ngua" active>
                  TƯ VẤN , TẦM SOÁT ,CHÍCH NGỪA UNG THƯ CỔ TỬ CUNG (HPV)
                </Breadcrumb.Item>
              ) : (
                " "
              )}
            </Breadcrumb>
            {blogs.slice((page - 1) * 8, page * 8)?.map((blog, index) => {
              return (
                <Row key={index} className="mb-3">
                  <Col lg={5} md={5} xs={12}>
                    <Card className="border-0">
                      <Card.Img
                        width={200}
                        height={180}
                        variant="top"
                        src={`/specialty-counsel/${blog.image}`}
                        className="specialty-counsel--image"
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
            <div className="d-flex justify-content-center">
              <ReactPaginate
                className=""
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={8}
                marginPagesDisplayed={2}
                pageCount={Math.ceil(blogs.length / 8)}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
              />
            </div>
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
