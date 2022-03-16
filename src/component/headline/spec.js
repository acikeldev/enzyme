import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

import { findByTestAtt, checkProps } from "../../Utils/index";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Checking Prop Types", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Desc",
        tempArr: [
          {
            firstName: "Test firstName",
            lastName: "Test lastName",
            email: "test@email.com",
            age: 23,
            onlineStatus: false,
          },
        ],
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
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
  describe("Have No Props", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setUp();
    });

    it("Should not render", () => {
      const component = findByTestAtt(wrapper, "headlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
