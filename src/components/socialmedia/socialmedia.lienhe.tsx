import Link from "next/link";
import { Image } from "react-bootstrap";
const SocialmediaComponent = () => {
  return (
    <div className="social-media d-flex justify-content-around flex-column py-0">
      <Link
        href="tel:1231231231"
        className="social-media--icon d-flex justify-content-center"
      >
        <i className="bi bi-telephone-forward"></i>
      </Link>
      <Link
        href="https://zalo.me/0913662553"
        className="social-media--icon d-flex justify-content-center align-items-center"
      >
        <Image
          src="https://sanphukhoatudu-bsdiep.com//wp-content/themes/thammyvientsnhan/img/icon-zalo.png"
          alt="icon zalo"
          className="social-media--icon__zalo"
        ></Image>
      </Link>

      <Link
        href="#"
        className="social-media--icon d-flex justify-content-center"
      >
        <i className="bi bi-messenger"></i>
      </Link>
    </div>
  );
};
export default SocialmediaComponent;
