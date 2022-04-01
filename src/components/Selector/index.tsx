import * as React from 'react';

import { ISelector } from '~/components/Selector/data';
import { Selector as Layout } from './Layout';

export const Selector = (props: ISelector ) => <Layout {...props} />;