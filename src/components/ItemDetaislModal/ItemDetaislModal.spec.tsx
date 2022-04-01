import * as React from 'react';
import { ItemDetaislModal }from './';
import { render } from '@testing-library/react-native';

describe('Render ItemDetaislModal', () => {
  it('Should be ItemDetaislModal exist', () => {
    const { getByTestId } = render(<ItemDetaislModal />);
    const currentElement = getByTestId(`ItemDetaislModal`);
    expect(currentElement).toBeTruthy();
  });
});