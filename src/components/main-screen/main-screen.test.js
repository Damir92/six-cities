import React from "react";
import renderer from "react-test-renderer";
import MainScreen from "./main-screen.jsx";

const offers = [
  {
    image: `img`,
    inBookmark: false,
    isPremium: false,
    price: 132,
    rating: 70,
    title: `Hotel`,
    type: `Apartment`,
  }, {
    image: `img`,
    inBookmark: false,
    isPremium: true,
    price: 180,
    rating: 100,
    title: `Room`,
    type: `Apartment`,
  }
];

it(`Render MainScreen`, () => {
  const tree = renderer
    .create(<MainScreen
      offers={ offers }
      onTitleClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
