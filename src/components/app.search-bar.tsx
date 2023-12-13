import GetMethodSpecialtyCounsel from "@/app/api/api.get";
import React from "react";
import {
  Button,
  CloseButton,
  Form,
  Image,
  InputGroup,
  Modal,
} from "react-bootstrap";
import { setTimeout } from "timers";

const SearchBarComponent = () => {
  const [modalShow, setModalShow] = React.useState(false);
  let keyword = {};
  const { data, error, isLoading } = GetMethodSpecialtyCounsel("specialty");
  function findPost(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setTimeout(function () {
        keyword = data.gynecology;
      console.log(data.gynecology);
    }, 2000);
    console.log(e.target.value);
  }
  
  return (
    <>
      <span className="text-dark" onClick={() => setModalShow(true)}>
        <i className="bi bi-search"></i>
      </span>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="p-0 m-0 modal-search-bar"
        size="lg"
      >
        <CloseButton
          onClick={() => setModalShow(false)}
          className=" btn-close-search"
        />
        <Modal.Body className="modal-body-search">
          <Form.Group
            controlId="form-group-id "
            className="position-relative d-flex form-input-search"
          >
            <Form.Control
              type="text"
              placeholder="Search ..."
              className="fs-3 text-white input-search ps-3"
              onChange={(e) => {
                findPost(e);
              }}
            />
            <Button
              onClick={() => console.log("search")}
              className="me-2 fs-1 fw-bold text-white bg-transparent border-0"
            >
              <i className="bi bi-search "></i>
            </Button>
          </Form.Group>

          <div className="live-search-results text-left z-top mt-1 p-3">
            <a
              className="autocomplete-suggestions text-decoration-none hand"
              href="/123"
              onClick={() => console.log("123")}
            >
              <div className="autocomplete-suggestion row" data-index="0">
                <div className="col-1 d-flex align-items-center justify-content-center p-2">
                  <Image
                    className="search-image rounded-circle my-auto"
                    src="https://sanphukhoatudu-bsdiep.com/wp-content/uploads/2023/11/thai-may-tuan-thi-may-150x150.jpg"
                    alt="pictures"
                    width={"40px"}
                    height={"40px"}
                  />
                </div>
                <div className="search-name text-white fs-2 col-11">
                  <strong>Thai </strong>mấy tuần thì máy? Dấu hiệu{" "}
                  <strong>thai </strong>máy bất thường
                </div>
              </div>
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SearchBarComponent;
