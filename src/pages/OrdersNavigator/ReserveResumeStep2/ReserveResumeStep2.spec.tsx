import * as React from 'react';
import { ReserveResumeStep2 } from './';
import { render } from '@testing-library/react-native';

describe('Render ReserveResumeStep2', () => {
  it('Should be ReserveResumeStep2 exist', () => {
    const { getByTestId } = render(<ReserveResumeStep2 />);
    const currentElement = getByTestId(`ReserveResumeStep2`);
    expect(currentElement).toBeTruthy();
  });
});