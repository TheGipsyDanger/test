import * as React from 'react';
import { ProgressBar }from './';
import { render } from '@testing-library/react-native';

describe('Render ProgressBar', () => {
  it('Should be ProgressBar exist', () => {
    const { getByTestId } = render(<ProgressBar />);
    const currentElement = getByTestId(`ProgressBar`);
    expect(currentElement).toBeTruthy();
  });
});