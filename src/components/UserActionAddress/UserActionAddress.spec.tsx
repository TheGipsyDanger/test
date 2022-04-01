import * as React from 'react';
import { UserActionAddress }from './';
import { render } from '@testing-library/react-native';

describe('Render UserActionAddress', () => {
  it('Should be UserActionAddress exist', () => {
    const { getByTestId } = render(<UserActionAddress />);
    const currentElement = getByTestId(`UserActionAddress`);
    expect(currentElement).toBeTruthy();
  });
});