import { Card, CardImg, CardText, CardTitle } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/products/${product._id}`}>
        <CardImg src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/products/${product._id}`}>
          <CardTitle as="div">
            <strong>{product.name}</strong>
          </CardTitle>
        </Link>
        <CardText as="h3">${product.price}</CardText>
      </Card.Body>
    </Card>
  );
};

export default Product;
