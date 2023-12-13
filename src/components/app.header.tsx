"use client";
import Link from "next/link";
import { Col, Image, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchBarComponent from "./app.search-bar";

function HeaderComponent() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <Image src="/logo.png" width={241} height={70} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto fw-bold fs-6">
              <Nav.Link>
                <Link href="/" className="nav-menu">
                  TRANG CHỦ
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/ve-chung-toi" className="nav-menu">
                  VỀ CHÚNG TÔI
                </Link>
              </Nav.Link>
              <NavDropdown title="CHUYÊN KHOA" id="basic-nav-dropdown">
                <Link
                  href="/phu-khoa"
                  className="text-decoration-none d-block text-black"
                >
                  PHỤ KHOA
                </Link>
                <Link
                  href="/san-khoa"
                  className="text-decoration-none d-block text-black"
                >
                  SẢN KHOA
                </Link>
                <Link
                  href="/sieu-am"
                  className="text-decoration-none d-block text-black"
                >
                  SIÊU ÂM
                </Link>
                <Link
                  href="/xet-nghiem"
                  className="text-decoration-none d-block text-black"
                >
                  XÉT NGHIỆM
                </Link>
              </NavDropdown>
              <NavDropdown title="TƯ VẤN" id="basic-nav-dropdown">
                <Link
                  href="/vo-sinh"
                  className="text-decoration-none d-block text-black"
                >
                  VÔ SINH
                </Link>
                <Link
                  href="/chich-ngua"
                  className="text-decoration-none d-block text-black"
                >
                  CHÍCH NGỪA
                </Link>
              </NavDropdown>
              <Nav.Link>
                <Link href="/tin-tuc" className="nav-menu">
                  TIN TỨC
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/lien-he" className="nav-menu">
                  LIÊN HỆ
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="#" className="nav-menu">
                  <SearchBarComponent></SearchBarComponent>
                </Link>
              </Nav.Link>
            </Nav>
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderComponent;
