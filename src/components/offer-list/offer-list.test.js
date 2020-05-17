import React from 'react';
import renderer from 'react-test-renderer';
import OfferList from './offer-list';

const offers = [
  {
    image: `img`,
    inBookmark: true,
    isPremium: false,
    price: 132,
    rating: 70,
    title: `Flat`,
    type: `Apartment`,
  }, {
    image: `img`,
    inBookmark: false,
    isPremium: true,
    price: 200,
    rating: 100,
    title: `House`,
    type: `Apartment`,
  },
];

it(`List correctly rendered`, () => {
  const tree = renderer
    .create(<OfferList
      city={ `Moscow` }
      count={ 800 }
      offers={ offers }
      onTitleClick={ jest.fn() }
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
