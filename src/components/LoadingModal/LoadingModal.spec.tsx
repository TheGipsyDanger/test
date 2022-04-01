import * as React from 'react';
import { LoadingModal }from './';
import { render } from '@testing-library/react-native';

describe('Render LoadingModal', () => {
  it('Should be LoadingModal exist', () => {
    const { getByTestId } = render(<LoadingModal />);
    const currentElement = getByTestId(`LoadingModal`);
    expect(currentElement).toBeTruthy();
  });
});