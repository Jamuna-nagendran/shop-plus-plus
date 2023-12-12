import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";

const CategoryFilterComponent = ({ setCategoriesFromFilter }) => {
  const { categories } = useSelector((state) => state.getCategories);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const myRefs = useRef([]);

  const selectCategory = (e, category, idx) => {
    setCategoriesFromFilter((items) => {
      return { ...items, [category.name]: e.target.checked };
    });

    // Disable all checkboxes except the current one
    myRefs.current.forEach((ref, i) => {
      ref.disabled = !(i === idx && e.target.checked);
    });

    // Handle selected categories
    if (e.target.checked) {
      setSelectedCategories([category.name]);
    } else {
      setSelectedCategories([]);
      window.location.href = "/product-list";
    }
  };

  useEffect(() => {
    // If there are no selected categories, enable all checkboxes
    if (selectedCategories.length === 0) {
      myRefs.current.forEach((ref) => {
        ref.disabled = false;
      });
    }
  }, [selectedCategories]);
  return (
    <>
      <span className="fw-bold">Category</span>
      <Form>
        {categories.map((category, idx) => (
          <div key={idx}>
            <Form.Check type="checkbox" id={`check-api2-${idx}`}>
              <Form.Check.Input
                ref={(el) => (myRefs.current[idx] = el)}
                type="checkbox"
                isValid
                onChange={(e) => selectCategory(e, category, idx)}
              />
              <Form.Check.Label style={{ cursor: "pointer" }}>
                {category.name}
              </Form.Check.Label>
            </Form.Check>
          </div>
        ))}
      </Form>
    </>
  );
};

export default CategoryFilterComponent;
