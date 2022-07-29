/**
 * @format
 */

import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import TextField from "../../../src/components/TextField";

it("renders correctly", () => {
    const tree = renderer.create(<TextField />).toJSON();
    expect(tree).toMatchSnapshot();
});
