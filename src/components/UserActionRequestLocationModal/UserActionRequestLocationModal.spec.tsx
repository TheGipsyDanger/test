import * as React from 'react';
import { UserActionRequestLocationModal } from './';
import { render } from '@testing-library/react-native';

describe('Render UserActionRequestLocationModal', () => {
  it('Should be UserActionRequestLocationModal exist', () => {
    const { getByTestId } = render(<UserActionRequestLocationModal />);
    const currentElement = getByTestId(`UserActionRequestLocationModal`);
    expect(currentElement).toBeTruthy();
  });
});
