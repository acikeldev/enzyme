import React from "react";

import { shallow } from "enzyme";

import Header from "./index";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

const findByTestAtt = (component, attribute) => {
  const wrapper = component.find(`[data-test='${attribute}']`);
  return wrapper;
};

describe("Header Component", () => {
  let component;

  //works before every single test
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtt(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a logo", () => {
    const logo = findByTestAtt(component, "logoIMG");
    expect(logo.length).toBe(1);
  });
});
