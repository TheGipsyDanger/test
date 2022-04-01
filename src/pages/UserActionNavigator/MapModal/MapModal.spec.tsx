import * as React from 'react';
import { MapModal } from './';
import { render } from '@testing-library/react-native';

describe('Render MapModal', () => {
  it('Should be MapModal exist', () => {
    const { getByTestId } = render(<MapModal />);
    const currentElement = getByTestId(`MapModal`);
    expect(currentElement).toBeTruthy();
  });
});