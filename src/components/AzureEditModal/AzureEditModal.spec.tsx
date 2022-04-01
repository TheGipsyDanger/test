import * as React from 'react';
import { AzureEditModal } from './';
import { render } from '@testing-library/react-native';

describe('Render AzureEditModal', () => {
  it('Should be AzureEditModal exist', () => {
    const { getByTestId } = render(<AzureEditModal />);
    const currentElement = getByTestId(`AzureEditModal`);
    expect(currentElement).toBeTruthy();
  });
});
