import ProductCarouselComponent from "../../components/ProductCarouselComponent";
import CategoryCardComponent from "../../components/CategoryCardComponent";
import { Row, Container, Spinner, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import MetaComponent from "../../components/MetaComponent";
import axios from "axios";

const HomePageComponent = ({ categories, getBestsellers }) => {
  const [mainCategories, setMainCategories] = useState([]);
  const [bestSellers, setBestsellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bestsellersData, categoriesData] = await Promise.all([
          getBestsellers(),
          axios.get("/api/categories"),
        ]);

        setBestsellers(bestsellersData);
        setMainCategories(
          categoriesData.data.filter((item) => !item.name.includes("/"))
        );
      } catch (error) {
        setError(
          error.response?.data?.message ||
            "An error occurred while fetching data."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <MetaComponent />
      {loading ? (
        // Display centered loading spinner
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{ height: "80vh" }}
        >
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Container>
      ) : (
        <>
          <ProductCarouselComponent bestSellers={bestSellers} />
          <Container>
            <Row xs={1} md={2} className="g-4 mt-5">
              {mainCategories.map((category, idx) => (
                <CategoryCardComponent
                  key={idx}
                  category={category}
                  idx={idx}
                />
              ))}
            </Row>
            {error && <Alert variant="danger">{error}</Alert>}
          </Container>
        </>
      )}
    </>
  );
};

export default HomePageComponent;
