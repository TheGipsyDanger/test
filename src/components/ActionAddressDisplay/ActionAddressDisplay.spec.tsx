import * as React from 'react';
import { ActionAddressDisplay }from './';
import { render } from '@testing-library/react-native';

describe('Render ActionAddressDisplay', () => {
  it('Should be ActionAddressDisplay exist', () => {
    const { getByTestId } = render(<ActionAddressDisplay />);
    const currentElement = getByTestId(`ActionAddressDisplay`);
    expect(currentElement).toBeTruthy();
  });
});