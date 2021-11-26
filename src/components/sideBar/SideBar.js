import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import './sideBar.css'

import React from "react";

const SideBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <>
        <Button className="btn btn-danger side-clr fw-bold rounded" onClick={handleShow}>
          Updates
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="fw-bold  bg-warning p-1  rounded">Car Updates</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="">

          <span className="opacity-50">Updates Comming Soon</span>
          <span className="text-warning">....</span>
          <img className="img-fluid shadow rounded mt-2" src="https://wolfvision.com/uploads/media/580x360/01/541-firmware-update_cynap.png?v=1-0" alt=""/>

          </Offcanvas.Body>
        </Offcanvas>
      </>
    </div>
  );
};

export default SideBar;
