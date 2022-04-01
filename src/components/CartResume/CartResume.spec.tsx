import * as React from 'react';
import { CartResume }from './';
import { render } from '@testing-library/react-native';

describe('Render CartResume', () => {
  it('Should be CartResume exist', () => {
    const { getByTestId } = render(<CartResume />);
    const currentElement = getByTestId(`CartResume`);
    expect(currentElement).toBeTruthy();
  });
});