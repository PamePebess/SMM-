import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ButtonFi = ({click}) => {
  return (
    <div>
      <Button className="btnreservation" variant="primary" onClick={click} href= "/finalView">Reserva</Button>{" "}
    </div>
  );
};

export default ButtonFi;
