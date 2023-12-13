import NewsDeatailHeaderComponent from "@/components/newdetail/news.detail.header";
import NewsDetailReasonComponent from "@/components/newdetail/news.detail.reson";
import NewsDeatailTitleComponent from "@/components/newdetail/news.detail.title";
import AsideComponent from "@/components/specialty-counsel/app.aside";
import { Col, Container, Row } from "react-bootstrap";

const AppNewsComponent = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col lg={9} md={12}>
          <NewsDeatailHeaderComponent />
          <NewsDeatailTitleComponent />
          <NewsDetailReasonComponent />
        </Col>
        <Col lg={3} md={12}>
          <AsideComponent />
        </Col>
      </Row>
    </Container>
  );
};
export default AppNewsComponent;
