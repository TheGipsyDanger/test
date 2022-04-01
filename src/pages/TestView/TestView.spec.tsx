import * as React from 'react';
import { TestView } from './Layout';
import { render } from '@testing-library/react-native';
import { IRegisterCardForm } from '~/utils';

describe('Render TestView', () => {
  it('Should be TestView exist', () => {
    const { getByTestId } = render(
      <TestView t="" form={{} as IRegisterCardForm} fields={[]} />
    );
    const currentElement = getByTestId(`TestView`);
    expect(currentElement).toBeTruthy();
  });
});
