import * as React from 'react';
import { ReserveResume } from './';
import { render } from '@testing-library/react-native';

describe('Render ReserveResume', () => {
  it('Should be ReserveResume exist', () => {
    const { getByTestId } = render(<ReserveResume />);
    const currentElement = getByTestId(`ReserveResume`);
    expect(currentElement).toBeTruthy();
  });
});