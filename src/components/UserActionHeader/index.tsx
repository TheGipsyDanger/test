import * as React from 'react';

import { IUserActionHeader } from '~/components/UserActionHeader/data';
import { UserActionHeader as Layout } from './Layout';

export const UserActionHeader = (props: IUserActionHeader ) => <Layout {...props} />;