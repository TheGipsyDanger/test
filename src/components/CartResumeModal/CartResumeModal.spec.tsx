import * as React from 'react';
import { CartResumeModal }from './';
import { render } from '@testing-library/react-native';

describe('Render CartResumeModal', () => {
  it('Should be CartResumeModal exist', () => {
    const { getByTestId } = render(<CartResumeModal />);
    const currentElement = getByTestId(`CartResumeModal`);
    expect(currentElement).toBeTruthy();
  });
});