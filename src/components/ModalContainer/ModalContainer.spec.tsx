import * as React from 'react';
import { ModalContainer }from './';
import { render } from '@testing-library/react-native';

describe('Render ModalContainer', () => {
  it('Should be ModalContainer exist', () => {
    const { getByTestId } = render(<ModalContainer />);
    const currentElement = getByTestId(`ModalContainer`);
    expect(currentElement).toBeTruthy();
  });
});