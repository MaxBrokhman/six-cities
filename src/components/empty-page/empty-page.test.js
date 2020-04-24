import React from 'react';
import renderer from 'react-test-renderer';

import {EmptyPage} from './empty-page';

it(`Renders EmptyPage component correctly`, () => {
  const tree = renderer
                .create(
                    <EmptyPage />
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
