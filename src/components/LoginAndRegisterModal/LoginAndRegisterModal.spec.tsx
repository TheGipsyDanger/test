import * as React from 'react';
import { LoginAndRegisterModal }from './';
import { render } from '@testing-library/react-native';

describe('Render LoginAndRegisterModal', () => {
  it('Should be LoginAndRegisterModal exist', () => {
    const { getByTestId } = render(<LoginAndRegisterModal />);
    const currentElement = getByTestId(`LoginAndRegisterModal`);
    expect(currentElement).toBeTruthy();
  });
});