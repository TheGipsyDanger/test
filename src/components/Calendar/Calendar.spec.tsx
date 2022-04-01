import * as React from 'react';
import { Calendar }from './';
import { render } from '@testing-library/react-native';

describe('Render Calendar', () => {
  it('Should be Calendar exist', () => {
    const { getByTestId } = render(<Calendar />);
    const currentElement = getByTestId(`Calendar`);
    expect(currentElement).toBeTruthy();
  });
});