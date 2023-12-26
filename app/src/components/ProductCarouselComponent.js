import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ProductCarouselComponent = ({ bestSellers }) => {
  const [textColor, setTextColor] = useState("white");
  const [backgroundColor, setBackgroundColor] = useState("rgba(0, 0, 0, 0.5)");

  useEffect(() => {
    const calculateContrast = (r, g, b) => {
      const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
      return luminance > 0.5 ? "white" : "black"; // Return color directly based on luminance
    };

    const imagePath = bestSellers[0]?.images?.[0]?.path;

    if (imagePath) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = imagePath;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, 1, 1);

        const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
        const textColor = calculateContrast(r, g, b);
        const backgroundColor = `rgba(${r}, ${g}, ${b}, 0.8)`;

        setTextColor(textColor);
        setBackgroundColor(backgroundColor);
      };
    }
  }, [bestSellers]);

  const cursorP = {
    cursor: "pointer",
  };

  return bestSellers.length > 0 ? (
    <Carousel style={{ height: "550px", overflow: "hidden" }}>
      {bestSellers.map((item, idx) => (
        <Carousel.Item key={idx}>
          <img
            crossOrigin="anonymous"
            className="d-block w-100"
            style={{ objectFit: "cover", height: "500px", maxHeight: "500px" }}
            src={item.images ? item.images[0].path : null}
            alt={`Slide ${idx + 1}`}
            loading="lazy" // Add loading="lazy" attribute
          />
          <Carousel.Caption
            style={{ color: textColor, backgroundColor: backgroundColor }}
          >
            <LinkContainer style={cursorP} to={`/product-details/${item._id}`}>
              <h3>Bestseller in {item.category} Category</h3>
            </LinkContainer>
            <p>{item.name}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  ) : null;
};

export default ProductCarouselComponent;
