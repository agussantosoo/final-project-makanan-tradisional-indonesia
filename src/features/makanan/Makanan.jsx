import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { getMakanan } from "./MakananSlice";
import CardFood from "../../components/CardFood";

export default function Makanan() {
  const { status, data } = useSelector((state) => state.makanan);
  const dispath = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispath(getMakanan());
    }
  }, [status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row>
        {data.map((item, i) => (
          <Col key={i} xs="6" md="4" lg="3">
            <CardFood item={item}></CardFood>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
