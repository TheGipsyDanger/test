import * as React from 'react';
import { Map }from './';
import { render } from '@testing-library/react-native';

describe('Render Map', () => {
  it('Should be Map exist', () => {
    const { getByTestId } = render(<Map />);
    const currentElement = getByTestId(`Map`);
    expect(currentElement).toBeTruthy();
  });
});