import * as React from 'react';
import { TestModal }from './';
import { render } from '@testing-library/react-native';

describe('Render TestModal', () => {
  it('Should be TestModal exist', () => {
    const { getByTestId } = render(<TestModal />);
    const currentElement = getByTestId(`TestModal`);
    expect(currentElement).toBeTruthy();
  });
});