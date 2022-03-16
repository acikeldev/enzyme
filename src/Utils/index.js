import checkPropTypes from "check-prop-types";

export const findByTestAtt = (component, attribute) => {
  const wrapper = component.find(`[data-test='${attribute}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propsErr;
};
