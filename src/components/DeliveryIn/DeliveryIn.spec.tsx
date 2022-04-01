import * as React from 'react';
import { DeliveryIn }from './';
import { render } from '@testing-library/react-native';

describe('Render DeliveryIn', () => {
  it('Should be DeliveryIn exist', () => {
    const { getByTestId } = render(<DeliveryIn />);
    const currentElement = getByTestId(`DeliveryIn`);
    expect(currentElement).toBeTruthy();
  });
});