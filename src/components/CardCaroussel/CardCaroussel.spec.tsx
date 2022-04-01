import * as React from 'react';
import { CardCaroussel }from './';
import { render } from '@testing-library/react-native';

describe('Render CardCaroussel', () => {
  it('Should be CardCaroussel exist', () => {
    const { getByTestId } = render(<CardCaroussel />);
    const currentElement = getByTestId(`CardCaroussel`);
    expect(currentElement).toBeTruthy();
  });
});