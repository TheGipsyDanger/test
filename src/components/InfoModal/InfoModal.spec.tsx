import * as React from 'react';
import { InfoModal }from './';
import { render } from '@testing-library/react-native';

describe('Render InfoModal', () => {
  it('Should be InfoModal exist', () => {
    const { getByTestId } = render(<InfoModal />);
    const currentElement = getByTestId(`InfoModal`);
    expect(currentElement).toBeTruthy();
  });
});