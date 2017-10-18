import React from 'react'
import Header from './Header'
import { create as render } from "react-test-renderer";
import { shallow } from 'enzyme'

it("should render signed out by default", () => {
  const snap = shallow(<Header />);
  expect(snap).toMatchSnapshot();
});

it("should render signed in", () => {
  const snap = shallow(<Header signedIn />);
  expect(snap).toMatchSnapshot();
});