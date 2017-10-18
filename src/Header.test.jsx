import React from "react";
import Header from "./Header";
import { create as render } from "react-test-renderer";
import { shallow, mount } from "enzyme";

it("should render signed out by default", () => {
  const snap = shallow(<Header />);
  expect(snap).toMatchSnapshot();

  const deep = mount(<Header />);
  const markers = {
    in: deep.find({"data-test":"signedin"}),
    out: deep.find({"data-test":"signedout"})
  };
  expect(markers.in).toHaveLength(0);
  expect(markers.out).toHaveLength(1);
});

it("should render signed in", () => {
  const snap = shallow(<Header signedIn />);
  expect(snap).toMatchSnapshot();
  
  const deep = mount(<Header signedIn />);
  const markers = {
    in: deep.find({"data-test":"signedin"}),
    out: deep.find({"data-test":"signedout"})
  };
  expect(markers.in).toHaveLength(1);
  expect(markers.out).toHaveLength(0);
});
