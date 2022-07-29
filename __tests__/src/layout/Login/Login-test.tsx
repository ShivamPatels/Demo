/**
 * @format
 */

import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import Login from "../../../../src/layouts/Login";

it("renders correctly", () => {
    const tree = renderer.create(<Login navigation={null} />).toJSON();
    expect(tree).toMatchSnapshot();
});
