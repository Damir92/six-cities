import React from "react";
import renderer from "react-test-renderer";
import MainScreen from "./main-screen.jsx";

it(`Render MainScreen`, () => {
  const tree = renderer
    .create(<MainScreen
      titles={[`title1`, `title1`]}
      onTitleClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
