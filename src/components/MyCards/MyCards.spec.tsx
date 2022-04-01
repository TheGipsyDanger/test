import * as React from 'react';
import { MyCards }from './';
import { render } from '@testing-library/react-native';

describe('Render MyCards', () => {
  it('Should be MyCards exist', () => {
    const { getByTestId } = render(<MyCards />);
    const currentElement = getByTestId(`MyCards`);
    expect(currentElement).toBeTruthy();
  });
});