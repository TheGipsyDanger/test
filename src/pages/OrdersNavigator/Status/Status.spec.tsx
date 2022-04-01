import * as React from 'react';
import { Status } from './';
import { render } from '@testing-library/react-native';

describe('Render Status', () => {
  it('Should be Status exist', () => {
    const { getByTestId } = render(<Status />);
    const currentElement = getByTestId(`Status`);
    expect(currentElement).toBeTruthy();
  });
});