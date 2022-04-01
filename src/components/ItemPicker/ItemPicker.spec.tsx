import * as React from 'react';
import { ItemPicker }from './';
import { render } from '@testing-library/react-native';

describe('Render ItemPicker', () => {
  it('Should be ItemPicker exist', () => {
    const { getByTestId } = render(<ItemPicker />);
    const currentElement = getByTestId(`ItemPicker`);
    expect(currentElement).toBeTruthy();
  });
});