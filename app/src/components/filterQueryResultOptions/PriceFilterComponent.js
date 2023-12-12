import { Form } from "react-bootstrap";
import formatPrice from "../../utils/priceFormatter";

const PriceFilterComponent = ({ price, setPrice }) => {
  return (
    <>
      <Form.Label>
        <span className="fw-bold">Price no greater than:</span>{" "}
        {formatPrice(price)}
      </Form.Label>
      <Form.Range
        min={10}
        max={100000}
        step={10}
        onChange={(e) => setPrice(e.target.value)}
      />
    </>
  );
};

export default PriceFilterComponent;
