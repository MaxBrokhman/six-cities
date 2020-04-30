import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {MainPage} from './main-page';


it(`Renders MainPage component correctly`, () => {
  const tree = renderer
                .create(
                    <BrowserRouter>
                      <MainPage />
                    </BrowserRouter>
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
