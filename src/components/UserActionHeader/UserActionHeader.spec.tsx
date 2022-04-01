import * as React from 'react';
import { UserActionHeader }from './';
import { render } from '@testing-library/react-native';

describe('Render UserActionHeader', () => {
  it('Should be UserActionHeader exist', () => {
    const { getByTestId } = render(<UserActionHeader />);
    const currentElement = getByTestId(`UserActionHeader`);
    expect(currentElement).toBeTruthy();
  });
});