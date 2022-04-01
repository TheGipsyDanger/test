import * as React from 'react';
import { Queue } from './';
import { render } from '@testing-library/react-native';

describe('Render Queue', () => {
  it('Should be Queue exist', () => {
    const { getByTestId } = render(<Queue />);
    const currentElement = getByTestId(`Queue`);
    expect(currentElement).toBeTruthy();
  });
});