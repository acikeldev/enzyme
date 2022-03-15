import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

import { findByTestAttr } from "../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Have props", () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc",
      };
      wrapper = setUp(props);
    });

    it("Should render wout errors", () => {
      const component = findByTestAttr(wrapper, "headlineComponent");
      expect(component.length).toBe(1);
    });
  });
  describe("Have No props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
  });
});
