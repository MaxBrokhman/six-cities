import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {OfferCard} from './offer-card';
import {offers} from '../../mocks/offers';

it(`Renders OfferCard component correctly`, () => {
  const handler = jest.fn();
  const leaveHandler = jest.fn();
  const addFavHandler = jest.fn();
  const tree = renderer
                .create(
                    <BrowserRouter>
                      <OfferCard
                        offer={offers[0]}
                        hoverHandler={handler}
                        leaveHandler={leaveHandler}
                        addFavHandler={addFavHandler}
                      />
                    </BrowserRouter>
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
