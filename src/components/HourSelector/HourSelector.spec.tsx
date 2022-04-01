import * as React from 'react';
import { HourSelector }from './';
import { render } from '@testing-library/react-native';

describe('Render HourSelector', () => {
  it('Should be HourSelector exist', () => {
    const { getByTestId } = render(<HourSelector />);
    const currentElement = getByTestId(`HourSelector`);
    expect(currentElement).toBeTruthy();
  });
});