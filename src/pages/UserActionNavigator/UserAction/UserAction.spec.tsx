import * as React from 'react';
import { UserAction } from './';
import { render } from '@testing-library/react-native';

describe('Render UserAction', () => {
  it('Should be UserAction exist', () => {
    const { getByTestId } = render(<UserAction />);
    const currentElement = getByTestId(`UserAction`);
    expect(currentElement).toBeTruthy();
  });
});