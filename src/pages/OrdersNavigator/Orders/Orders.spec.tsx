import * as React from 'react';
import { Orders } from './';
import { render } from '@testing-library/react-native';

describe('Render Orders', () => {
  it('Should be Orders exist', () => {
    const { getByTestId } = render(<Orders />);
    const currentElement = getByTestId(`Orders`);
    expect(currentElement).toBeTruthy();
  });
});
