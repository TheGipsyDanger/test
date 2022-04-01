import * as React from 'react';
import { ActionTypeDisplay } from './';
import { render } from '@testing-library/react-native';

describe('Render ActionTtypeDisplay', () => {
  it('Should be ActionTtypeDisplay exist', () => {
    const { getByTestId } = render(<ActionTypeDisplay />);
    const currentElement = getByTestId(`ActionTtypeDisplay`);
    expect(currentElement).toBeTruthy();
  });
});
