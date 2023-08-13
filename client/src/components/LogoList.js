import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Row } from "react-bootstrap";
import LogoItem from "./Logo/LogoItem";
import { fetchLogo } from "../http/logoAPI";

const DeviceList = observer(() => {

  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetchLogo().then((data) => setLogo(data));
  }, []);
  return (
    <Row className="d-flex">
      
      {logo.map((el, key) => (
        <>
        <LogoItem key={el.id} logo={el}/>
        </>
      ))}
    </Row>
  );
});

export default DeviceList;