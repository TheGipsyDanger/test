import * as React from 'react';
import { Menu } from './';
import { render } from '@testing-library/react-native';

describe('Render Menu', () => {
  it('Should be Menu exist', () => {
    const { getByTestId } = render(<Menu />);
    const currentElement = getByTestId(`Menu`);
    expect(currentElement).toBeTruthy();
  });
});