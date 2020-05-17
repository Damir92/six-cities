import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MainScreen from "./main-screen";

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

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title be pressed`, () => {
  const onTitleClick = jest.fn();

  const mainScreen = shallow(
      <MainScreen
        offers={ offers }
        onTitleClick={onTitleClick}
      />
  );

  const titles = mainScreen.find(`.place-card__name a`);

  titles.forEach((title) => {
    title.simulate(`click`, {preventDefault() {}});
  });

  expect(onTitleClick).toHaveBeenCalledTimes(titles.length);
});
