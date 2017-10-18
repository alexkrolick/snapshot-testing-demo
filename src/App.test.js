import React from "react";
import { create as render } from "react-test-renderer";
import App from "./App";

it("renders without crashing", () => {
  const component = render(<App />);
  const snap = component.toJSON();
  expect(snap).toMatchSnapshot();
});


