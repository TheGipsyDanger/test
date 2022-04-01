import * as React from 'react';
import { OrderHeader }from './';
import { render } from '@testing-library/react-native';

describe('Render OrderHeader', () => {
  it('Should be OrderHeader exist', () => {
    const { getByTestId } = render(<OrderHeader />);
    const currentElement = getByTestId(`OrderHeader`);
    expect(currentElement).toBeTruthy();
  });
});