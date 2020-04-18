import React from 'react';
import renderer from 'react-test-renderer';

import {OffersList} from './offers-list';

it(`Renders OffersList component correctly`, () => {
  const tree = renderer
                .create(
                    <OffersList />
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
