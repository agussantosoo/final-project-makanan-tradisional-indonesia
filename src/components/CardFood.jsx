import React from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

export default function CardFood({ item }) {
  return (
    <Card className="mb-5">
      <img alt="Sample" src={item.img} />
      <CardBody>
        <CardTitle tag="h5">{item.name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Rp. {item.price}
        </CardSubtitle>
        <CardText>{item.dsc}</CardText>
      </CardBody>
    </Card>
  );
}
