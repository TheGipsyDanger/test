import * as React from 'react';
import { FormInput }from './';
import { render } from '@testing-library/react-native';

describe('Render FormInput', () => {
  it('Should be FormInput exist', () => {
    const { getByTestId } = render(<FormInput />);
    const currentElement = getByTestId(`FormInput`);
    expect(currentElement).toBeTruthy();
  });
});