import * as React from 'react';
import { ToastModal }from './';
import { render } from '@testing-library/react-native';

describe('Render ToastModal', () => {
  it('Should be ToastModal exist', () => {
    const { getByTestId } = render(<ToastModal />);
    const currentElement = getByTestId(`ToastModal`);
    expect(currentElement).toBeTruthy();
  });
});