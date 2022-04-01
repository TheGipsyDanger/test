import * as React from 'react';
import { BottomSpotlight }from './';
import { render } from '@testing-library/react-native';

describe('Render BottomSpotlight', () => {
  it('Should be BottomSpotlight exist', () => {
    const { getByTestId } = render(<BottomSpotlight />);
    const currentElement = getByTestId(`BottomSpotlight`);
    expect(currentElement).toBeTruthy();
  });
});