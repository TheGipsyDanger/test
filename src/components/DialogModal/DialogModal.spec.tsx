import * as React from 'react';
import { DialogModal }from './';
import { render } from '@testing-library/react-native';

describe('Render DialogModal', () => {
  it('Should be DialogModal exist', () => {
    const { getByTestId } = render(<DialogModal />);
    const currentElement = getByTestId(`DialogModal`);
    expect(currentElement).toBeTruthy();
  });
});