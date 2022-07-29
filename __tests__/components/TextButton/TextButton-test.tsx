/**
 * @format
 */

import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import TextButton from "../../../src/components/TextButton";

it("renders correctly", () => {
    const tree = renderer.create(<TextButton title="Apple" />).toJSON();
    expect(tree).toMatchSnapshot();
});
