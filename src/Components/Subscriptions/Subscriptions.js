import React from "react";
import "./Subscriptions.scss";
import "../../index.scss";
import { Row, Col } from "react-bootstrap";
import numeral from "numeral";

export default function Subscriptions() {
  return (
    <>
      <Row className="subscriptions">
        <Col sm={4} className="image">
          <img src="https://yt3.ggpht.com/ZjcQii3sVKaPcGK3rIm8vot-qwdmm7KAHsWCjlQLsDLa_tm2kykM-Lgmty1IwQWehj7nEzXPUA=s176-c-k-c0x00ffffff-no-rj" />
        </Col>
        <Col sm={8} className="subscriptions_details">
          <h3>Metallica</h3>
          <span className="subscriptions_details_description">
            some Description
          </span>
          <div className="total">
            <span>{numeral(235).format('0.a')} videos</span>
            <span>{numeral(2357777645432).format('0.a')} views</span>
          </div>
        </Col>
      </Row>
    </>
  );
}
