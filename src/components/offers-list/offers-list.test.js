import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {offers} from '../../mocks/offers';
import {OffersList} from './offers-list';

it(`Renders OffersList component correctly`, () => {
  const handler = jest.fn();
  const leaveHandler = jest.fn();
  const tree = renderer
                .create(
                    <BrowserRouter>
                      <OffersList
                        offers={offers}
                        hoverHandler={handler}
                        leaveHandler={leaveHandler}
                      />
                    </BrowserRouter>
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
