import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

import { findByTestAtt } from "../../Utils/index";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Have Props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Description",
      };
      wrapper = setUp(props);
    });

    it("Should render without errors", () => {
      const component = findByTestAtt(wrapper, "headlineComponent");
      expect(component.length).toBe(1);
    });

    it("Should render H1", () => {
      const h1 = findByTestAtt(wrapper, "header");
      expect(h1.length).toBe(1);
    });

    it("Should render desc", () => {
      const desc = findByTestAtt(wrapper, "desc");
      expect(desc.length).toBe(1);
    });
  });
});
