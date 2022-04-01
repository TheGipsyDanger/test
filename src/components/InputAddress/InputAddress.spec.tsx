import * as React from 'react';
import { InputAddress }from './';
import { render } from '@testing-library/react-native';

describe('Render InputAddress', () => {
  it('Should be InputAddress exist', () => {
    const { getByTestId } = render(<InputAddress />);
    const currentElement = getByTestId(`InputAddress`);
    expect(currentElement).toBeTruthy();
  });
});