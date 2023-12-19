import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import LazyLoad from "react-lazyload";

const CategoryCardComponent = ({ category, idx }) => {
  return (
    <Col md={4} style={{ marginBottom: "20px" }}>
      <Card
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <LazyLoad height={200} offset={100}>
          <Card.Img
            crossOrigin="anonymous"
            variant="top"
            src={category.image ?? null}
            loading="lazy"
          />
        </LazyLoad>
        <Card.Body style={{ flex: "1" }}>
          <Card.Title>{category.name}</Card.Title>
          <Card.Text style={{ flex: "1", overflow: "hidden" }}>
            {category.description}
          </Card.Text>
          <LinkContainer to={`/product-list/category/${category.name}`}>
            <Button variant="primary">Go to the Category</Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CategoryCardComponent;
