import * as React from 'react';
import { ItemQuantityInput }from './';
import { render } from '@testing-library/react-native';

describe('Render ItemQuantityInput', () => {
  it('Should be ItemQuantityInput exist', () => {
    const { getByTestId } = render(<ItemQuantityInput />);
    const currentElement = getByTestId(`ItemQuantityInput`);
    expect(currentElement).toBeTruthy();
  });
});