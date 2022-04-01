import * as React from 'react';
import { ResetPasswordModal }from './';
import { render } from '@testing-library/react-native';

describe('Render ResetPasswordModal', () => {
  it('Should be ResetPasswordModal exist', () => {
    const { getByTestId } = render(<ResetPasswordModal />);
    const currentElement = getByTestId(`ResetPasswordModal`);
    expect(currentElement).toBeTruthy();
  });
});