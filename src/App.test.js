import React from "react";
import { create as render } from "react-test-renderer";
import App from "./App";
import { shallow } from 'enzyme'

it("renders without crashing", () => {
  const snap = shallow(<App />);
  expect(snap).toMatchSnapshot();
});


