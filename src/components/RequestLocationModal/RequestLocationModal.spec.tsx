import * as React from 'react';
import { RequestLocationModal }from './';
import { render } from '@testing-library/react-native';

describe('Render RequestLocationModal', () => {
  it('Should be RequestLocationModal exist', () => {
    const { getByTestId } = render(<RequestLocationModal />);
    const currentElement = getByTestId(`RequestLocationModal`);
    expect(currentElement).toBeTruthy();
  });
});