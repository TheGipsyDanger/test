import * as React from 'react';
import { HeaderOrdersList }from './';
import { render } from '@testing-library/react-native';

describe('Render HeaderOrdersList', () => {
  it('Should be HeaderOrdersList exist', () => {
    const { getByTestId } = render(<HeaderOrdersList />);
    const currentElement = getByTestId(`HeaderOrdersList`);
    expect(currentElement).toBeTruthy();
  });
});