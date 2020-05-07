import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MainScreen from "./main-screen";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title be pressed`, () => {
  const onTitleClick = jest.fn();

  const mainScreen = shallow(
      <MainScreen
        titles={[`title`, `title`]}
        onTitleClick={onTitleClick}
      />
  );

  const titles = mainScreen.find(`.place-card__name a`);

  titles.forEach((title) => {
    title.simulate(`click`, {preventDefault() {}});
  });

  expect(onTitleClick).toHaveBeenCalledTimes(titles.length);
});
