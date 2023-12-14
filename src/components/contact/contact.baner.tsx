"use client";

import { Image } from "react-bootstrap";

const ContactBannerComponent = () => {
  return (
    <div className="contact-banner">
      <div className="box-image">
        <Image
          src="/home/home-news/tap-the-bac-sy.jpg"
          className="Contact-banner--image"
          alt="tap-the-bac-sy.jpg"
        />
      </div>
      <div className="box-text text-right is-large dark">
        <div className="contact-banner--textbox text-white text-center px-3 py-2">
          <div id="text" className="text">
            <h4>PHÒNG KHÁM PHỤ KHOA</h4>
            <p className="mb-0">
              BÁC SỸ PHẠM THỊ NGỌC ĐIỆP TẬN TÂM TẬN TÌNH TẬN LỰC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactBannerComponent;
