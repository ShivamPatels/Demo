/**
 * @format
 */

import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import Detail from "../../../../src/layouts/Detail";

it("renders correctly", () => {
    const tree = renderer.create(<Detail navigation={null} />).toJSON();
    expect(tree).toMatchSnapshot();
});
