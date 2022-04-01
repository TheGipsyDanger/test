import * as React from 'react';
import { OrderResumeModal }from './';
import { render } from '@testing-library/react-native';

describe('Render OrderResumeModal', () => {
  it('Should be OrderResumeModal exist', () => {
    const { getByTestId } = render(<OrderResumeModal />);
    const currentElement = getByTestId(`OrderResumeModal`);
    expect(currentElement).toBeTruthy();
  });
});