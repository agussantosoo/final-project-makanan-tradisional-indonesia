import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { getMinuman } from "./MinumanSlice";
import CardFood from "../../components/CardFood";

export default function Minuman() {
  const { status, data } = useSelector((state) => state.minuman);
  const dispath = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispath(getMinuman());
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
