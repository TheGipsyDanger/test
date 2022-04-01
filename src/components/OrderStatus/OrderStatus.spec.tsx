import * as React from 'react';
import { OrderStatus }from './';
import { render } from '@testing-library/react-native';

describe('Render OrderStatus', () => {
  it('Should be OrderStatus exist', () => {
    const { getByTestId } = render(<OrderStatus />);
    const currentElement = getByTestId(`OrderStatus`);
    expect(currentElement).toBeTruthy();
  });
});