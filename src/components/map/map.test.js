import React from 'react';
import renderer from 'react-test-renderer';

import {offers} from '../../mocks/offers';
import {Map} from './map';

it(`Renders Map component correctly`, () => {
  const tree = renderer
                .create(
                    <Map offers={offers} className="cities__map" />
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
