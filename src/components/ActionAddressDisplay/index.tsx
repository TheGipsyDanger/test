import * as React from 'react';

import { IActionAddressDisplay } from '~/components/ActionAddressDisplay/data';
import { ActionAddressDisplay as Layout } from './Layout';

export const ActionAddressDisplay = (props: IActionAddressDisplay) => (
  <Layout {...props} />
);
