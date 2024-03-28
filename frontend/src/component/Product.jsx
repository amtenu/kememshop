import { Card, CardImg, CardText, CardTitle } from "react-bootstrap";
import React from "react";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/products/${product._id}`}>
        <CardImg src={product.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/products/${product._id}`}>
          <CardTitle as="div">
            <strong>{product.name}</strong>
          </CardTitle>
        </a>
        <CardText as="h3">${product.price}</CardText>
      </Card.Body>
    </Card>
  );
};

export default Product;
