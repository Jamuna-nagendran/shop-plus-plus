import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";
import HomePage from "./HomePage";

const axios = require("axios");
jest.mock("axios");

import * as reactRedux from "react-redux";
const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

beforeEach(() => {
  useSelectorMock.mockClear();
});

var mockState = {
  categories: [],
};

test("if product name is seen", async () => {
  useSelectorMock.mockReturnValue(mockState);
  axios.get.mockResolvedValue({
    data: [
      {
        _id: "6315f5f6b4ab1404dc103427",
        name: "How to Finish Everything You Start",
        description: "Habits to Transform Your Life",
        category: "Books",
        images: [{ path: "path" }],
      },
    ],
  });

  render(
    <Router>
      <HomePage />
    </Router>
  );

  await waitFor(() => screen.getByText(/Bestseller in Books Category/i));

  console.log(document.body.innerHTML);

  expect(
    screen.getByText(/How to Finish Everything You Start/i)
  ).toBeInTheDocument();
});
