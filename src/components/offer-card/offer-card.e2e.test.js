import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter} from 'react-router-dom';

import {OfferCard} from './offer-card';
import {offers} from '../../mocks/offers';

Enzyme.configure({adapter: new Adapter()});

it(`OfferCard component rendered correctly, hover handler works`, () => {
  const hoverHandler = jest.fn();
  const leaveHandler = jest.fn();
  const addFavHandler = jest.fn();
  const tree = mount(
      <BrowserRouter>
        <OfferCard
          hoverHandler={hoverHandler}
          offer={offers[0]}
          leaveHandler={leaveHandler}
          addFavHandler={addFavHandler}
        />
      </BrowserRouter>
  );
  const card = tree.find(`.cities__place-card`);
  card.simulate(`mouseover`, offers[0]);
  expect(hoverHandler).toHaveBeenCalledTimes(1);
  expect(hoverHandler).toHaveBeenCalledWith(offers[0]);
});
