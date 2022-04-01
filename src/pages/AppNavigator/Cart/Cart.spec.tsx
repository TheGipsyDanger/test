import * as React from 'react';
import { Cart } from './';
import { render } from '@testing-library/react-native';

describe('Render Cart', () => {
  it('Should be Cart exist', () => {
    const { getByTestId } = render(<Cart />);
    const currentElement = getByTestId(`Cart`);
    expect(currentElement).toBeTruthy();
  });
});
