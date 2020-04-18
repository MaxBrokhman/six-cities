import React from 'react';
import renderer from 'react-test-renderer';

import {OfferCard} from './offer-card';
import {offers} from '../../mocks/offers';

it(`Renders OfferCard component correctly`, () => {
  const handler = jest.fn();
  const tree = renderer
                .create(
                    <OfferCard
                      offer={offers[0]}
                      hoverHandler={handler}
                    />
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
