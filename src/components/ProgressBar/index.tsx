import * as React from 'react';

import { IProgressBar } from '~/components/ProgressBar/data';
import { ProgressBar as Layout } from './Layout';

export const ProgressBar = (props: IProgressBar ) => <Layout {...props} />;