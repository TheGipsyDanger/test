import * as React from 'react';

import { IHome } from '~/pages/Home/data';
import { Home as Layout } from './Layout';

export const Home = (props: IHome) => {
  const texts = [
    'yarn g',
    ', to generate components',
    "• Page, to create Pages(Container's)",
    '• Components, for the creation of components.',
    '• Context, to create a new Context Hooks.',
    '• Flow, to create a new application flow.',
    '• Factory, to create a factory',
    '• Interface, to create global interfaces',
  ];

  return <Layout {...props} data={texts} />;
};
