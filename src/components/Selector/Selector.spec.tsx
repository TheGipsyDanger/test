import * as React from 'react';
import { Selector }from './';
import { render } from '@testing-library/react-native';

describe('Render Selector', () => {
  it('Should be Selector exist', () => {
    const { getByTestId } = render(<Selector />);
    const currentElement = getByTestId(`Selector`);
    expect(currentElement).toBeTruthy();
  });
});