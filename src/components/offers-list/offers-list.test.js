import React from 'react';
import renderer from 'react-test-renderer';

import {offers} from '../../mocks/offers';
import {OffersList} from './offers-list';

it(`Renders OffersList component correctly`, () => {
  const tree = renderer
                .create(
                    <OffersList offers={offers} />
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
