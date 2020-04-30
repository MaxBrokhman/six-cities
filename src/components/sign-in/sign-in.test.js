import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {SignIn} from './sign-in';


it(`Renders SignIn component correctly`, () => {
  const tree = renderer
                .create(
                    <BrowserRouter>
                      <SignIn />
                    </BrowserRouter>
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
