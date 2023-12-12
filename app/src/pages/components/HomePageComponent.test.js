import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePageComponent from "./HomePageComponent";
import { MemoryRouter as Router } from "react-router-dom";

let categories = [];
let getBestsellers = () => {
  return new Promise((resolve, reject) => {
    resolve([
      {
        _id: "6315f5f6b4ab1404dc103427",
        name: "Apple",
        description: "Product Description",
        category: "Electronics",
        images: [{ path: "path" }],
      },
    ]);
  });
};

let getBestsellersError = () => {
  return new Promise((resolve, reject) => {
    reject({
      response: {
        data: {
          message: "Product is not defined",
        },
      },
    });
  });
};

test("if category is seen", async () => {
  render(
    <Router>
      <HomePageComponent
        categories={categories}
        getBestsellers={getBestsellers}
      />
    </Router>
  );
  await waitFor(() => screen.getByText(/Electronics/i));
  expect(screen.getByText(/Electronics/i)).toBeInTheDocument();
});

test("if error is seen", async () => {
  render(
    <Router>
      <HomePageComponent
        categories={categories}
        getBestsellers={getBestsellersError}
      />
    </Router>
  );

  await waitFor(() => screen.getByText(/Product is not defined/i));
  expect(screen.getByText(/Product is not defined/i)).toBeInTheDocument();
});
