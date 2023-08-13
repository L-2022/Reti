import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LogoList from "../components/LogoList";
import { observer } from "mobx-react-lite";

const Shop = observer(() => {

  return (
    <Row className="form-row-lg-5 p-3">
      <Col>
      </Col>
      <Col className="col-10">
        <LogoList />
      </Col>
    </Row>
  );
});

export default Shop;
