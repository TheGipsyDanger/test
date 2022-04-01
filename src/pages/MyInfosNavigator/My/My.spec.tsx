import * as React from 'react';
import { My } from './';
import { render } from '@testing-library/react-native';

describe('Render Profile', () => {
  it('Should be Profile exist', () => {
    const { getByTestId } = render(<My />);
    const currentElement = getByTestId(`Profile`);
    expect(currentElement).toBeTruthy();
  });
});
