import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { LinkContainer } from "react-router-bootstrap";
import formatPrice from "../utils/priceFormatter";

const ProductForListComponent = ({ products }) => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {products.map((product) => (
        <Col key={product._id}>
          <Card className="h-100">
            <Card.Img
              crossOrigin="anonymous"
              variant="top"
              src={product.images[0] ? product.images[0].path : ""}
            />
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title>{product.name}</Card.Title>
              </div>
              <div>
                <Card.Text>
                  <Rating readonly size={20} initialValue={product.rating} /> (
                  {product.reviewsNumber})
                </Card.Text>
                <Card.Text className="h4">
                  {formatPrice(product.price)}{" "}
                  <LinkContainer to={`/product-details/${product._id}`}>
                    <Button variant="danger">See product</Button>
                  </LinkContainer>
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductForListComponent;
