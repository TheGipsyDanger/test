import * as React from 'react';
import { ItemBagQuantityInput } from './';
import { render } from '@testing-library/react-native';

describe('Render ItemBagQuantityInput', () => {
  it('Should be ItemBagQuantityInput exist', () => {
    const { getByTestId } = render(<ItemBagQuantityInput />);
    const currentElement = getByTestId(`ItemBagQuantityInput`);
    expect(currentElement).toBeTruthy();
  });
});