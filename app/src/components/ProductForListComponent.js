import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { LinkContainer } from "react-router-bootstrap";

const ProductForListComponent = ({ products }) => {
  return (
    <Row>
      {products.map((product) => (
        <Col md={4} key={product._id}>
          <Card
            style={{
              marginTop: "30px",
              marginBottom: "50px",
              marginLeft: "50px",
              marginRight: "20px",
            }}
          >
            <Card.Img
              crossOrigin="anonymous"
              variant="top"
              src={product.images[0] ? product.images[0].path : ""}
            />
            <Card.Body
              style={{
                height: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <Rating readonly size={20} initialValue={product.rating} /> (
                  {product.reviewsNumber})
                </Card.Text>
              </div>
              <div>
                <Card.Text className="h4">
                  &#8377;{product.price}{" "}
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
