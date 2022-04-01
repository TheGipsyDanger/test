import * as React from 'react';
import { Accordion }from './';
import { render } from '@testing-library/react-native';

describe('Render Accordion', () => {
  it('Should be Accordion exist', () => {
    const { getByTestId } = render(<Accordion />);
    const currentElement = getByTestId(`Accordion`);
    expect(currentElement).toBeTruthy();
  });
});