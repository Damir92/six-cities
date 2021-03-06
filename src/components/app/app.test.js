import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

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

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      offers={ offers }
      onTitleClick={ jest.fn() }
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
