import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from './offer-card';

Enzyme.configure({adapter: new Adapter()});

const offer = {
  image: `img`,
  inBookmark: true,
  isPremium: false,
  price: 132,
  rating: 70,
  title: `Flat`,
  type: `Apartment`,
};
const onTitleClick = jest.fn();
const onImageClick = jest.fn();
const onMouseEnterCard = jest.fn();
const onMouseLeaveCard = jest.fn();

it(`Test click image of card`, () => {
  const app = shallow(
      <OfferCard
        offer={ offer }
        onTitleClick={ onTitleClick }
        onImageClick={ onImageClick }
        onMouseEnterCard={ onMouseEnterCard }
        onMouseLeaveCard={ onMouseLeaveCard }
      />
  );

  const image = app.find(`.cities__image-wrapper a`);

  image.simulate(`click`, {preventDefault() {}});

  expect(onImageClick).toHaveBeenCalledTimes(1);

  expect(onImageClick.mock.calls[0][0]).toContain(offer.title);
});
