import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ProductCarouselComponent = ({ bestSellers }) => {
  const [textColor, setTextColor] = useState("white"); // Default text color
  const [backgroundColor, setBackgroundColor] = useState("rgba(0, 0, 0, 0.5)"); // Default background color

  useEffect(() => {
    const calculateContrast = (r, g, b) => {
      const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
      return luminance > 0.5 ? "dark" : "light";
    };

    const imagePath = bestSellers[0]?.images?.[0]?.path;

    if (imagePath) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = imagePath;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, 1, 1); // Draw a 1x1 pixel image

        const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
        const contrastType = calculateContrast(r, g, b);

        setTextColor(contrastType === "dark" ? "white" : "black");
        setBackgroundColor(`rgba(${r}, ${g}, ${b}, 0.5)`);
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
