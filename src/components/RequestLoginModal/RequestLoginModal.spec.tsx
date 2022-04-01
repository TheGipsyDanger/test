import * as React from 'react';
import { RequestLoginModal }from './';
import { render } from '@testing-library/react-native';

describe('Render RequestLoginModal', () => {
  it('Should be RequestLoginModal exist', () => {
    const { getByTestId } = render(<RequestLoginModal />);
    const currentElement = getByTestId(`RequestLoginModal`);
    expect(currentElement).toBeTruthy();
  });
});