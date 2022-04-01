import * as React from 'react';
import { Payment } from './';
import { render } from '@testing-library/react-native';

describe('Render Payment', () => {
  it('Should be Payment exist', () => {
    const { getByTestId } = render(<Payment />);
    const currentElement = getByTestId(`Payment`);
    expect(currentElement).toBeTruthy();
  });
});