import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {OfferCard} from './offer-card';
import {offers} from '../../mocks/offers';

Enzyme.configure({adapter: new Adapter()});

it(`OfferCard component rendered correctly, hover handler works`, () => {
  const hoverHandler = jest.fn();
  const tree = shallow(
      <OfferCard hoverHandler={hoverHandler} offer={offers[0]} />
  );
  const card = tree.find(`.cities__place-card`);
  card.simulate(`mouseover`, offers[0]);
  expect(hoverHandler).toHaveBeenCalledTimes(1);
  expect(hoverHandler).toHaveBeenCalledWith(offers[0]);
});
