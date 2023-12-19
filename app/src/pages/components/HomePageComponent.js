import ProductCarouselComponent from "../../components/ProductCarouselComponent";
import CategoryCardComponent from "../../components/CategoryCardComponent";
import { Row, Container, Alert, Spinner } from "react-bootstrap";

import { useEffect, useState } from "react";
import MetaComponent from "../../components/MetaComponent";

const HomePageComponent = ({ categories, getBestsellers }) => {
  const [mainCategories, setMainCategories] = useState([]);
  const [bestSellers, setBestsellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bestSellersData = await getBestsellers();
        setBestsellers(bestSellersData);

        const mainCategoriesData = categories.filter(
          (item) => !item.name.includes("/")
        );
        setMainCategories(mainCategoriesData);
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        setError(err.response?.data?.message || "An error occurred");
        setLoading(false); // Set loading to false in case of an error
        console.error(err.response?.data?.message || "An error occurred", err);
      }
    };

    fetchData();
  }, [categories, getBestsellers]);

  return (
    <>
      <MetaComponent />
      {loading ? (
        // Display loading spinner while data is being fetched
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
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
