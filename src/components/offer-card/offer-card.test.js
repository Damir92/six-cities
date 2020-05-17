import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from './offer-card';

const offer = {
  image: `img`,
  inBookmark: true,
  isPremium: false,
  price: 132,
  rating: 70,
  title: `Flat`,
  type: `Apartment`,
};

it(`Card correctly rendered`, () => {
  const tree = renderer
    .create(<OfferCard
      offer={ offer }
      onTitleClick={ jest.fn() }
      onImageClick={ jest.fn() }
      onMouseEnterCard={ jest.fn() }
      onMouseLeaveCard={ jest.fn() }
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
