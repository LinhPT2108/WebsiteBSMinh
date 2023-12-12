"use client";

import { Container } from "react-bootstrap";
import HomeBannerComponent from "./home.banner";
import HomeAboutComponent from "./home.about";
import HomeCounselComponent from "./home.counsel";
import HomeFeelComponent from "./home.feel";
import HomeServiceComponent from "./home.service";
import HomeNewsComponent from "./home.news";
import HomeSpecialtyComponent from "./home.specialty";
import HomReasonComponent from "./home.reason";

const AppHomeComponent = () => {
  return (
    <>
      <HomeBannerComponent />
      <Container>
        <HomeAboutComponent />
      </Container>
      <HomeCounselComponent />
      <Container>
        <HomeFeelComponent />
      </Container>
      <HomeServiceComponent />
      <HomeNewsComponent />
      <HomReasonComponent />
      <HomeSpecialtyComponent />
    </>
  );
};

export default AppHomeComponent;
