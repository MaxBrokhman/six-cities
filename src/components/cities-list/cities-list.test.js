import React from 'react';
import renderer from 'react-test-renderer';

import {CitiesList} from './cities-list';

it(`Renders CitiesList component correctly`, () => {
  const tree = renderer
                .create(<CitiesList />)
                .toJSON();
  expect(tree).toMatchSnapshot();
});
