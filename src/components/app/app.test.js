import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {App} from './app';

it(`Renders App component correctly`, () => {

  const tree = renderer
                .create(
                    <BrowserRouter>
                      <App />
                    </BrowserRouter>
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
